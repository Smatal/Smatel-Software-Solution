"use client";

import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  baseAngle: number;
  length: number;
  thickness: number;
  opacity: number;
  randomSeed: number;

  constructor(originX: number, originY: number, angle: number) {
    this.x = originX;
    this.y = originY;
    this.originX = originX;
    this.originY = originY;
    this.vx = 0;
    this.vy = 0;
    this.baseAngle = angle;
    this.length = 8 + Math.random() * 10; // Capsule length
    this.thickness = 1.5 + Math.random() * 1.5; // Capsule thickness
    this.opacity = 0.1 + Math.random() * 0.25; // Subtle visibility
    this.randomSeed = Math.random() * 1000;
  }

  update(mx: number, my: number, time: number) {
    const dx = mx - this.x;
    const dy = my - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    // Mouse interaction
    const interactionRadius = 250;
    if (dist < interactionRadius && dist > 0) {
      const force = (interactionRadius - dist) / interactionRadius; 
      
      const nx = dx / dist;
      const ny = dy / dist;
      
      // Orbiting force (perpendicular)
      const orbitStrength = 1.6;
      this.vx -= ny * force * orbitStrength;
      this.vy += nx * force * orbitStrength;
      
      // Flow/repel force (push away slightly)
      const repelStrength = 0.8;
      this.vx -= nx * force * repelStrength;
      this.vy -= ny * force * repelStrength;
    }

    // Spring force towards origin (inertia & momentum)
    const sx = this.originX - this.x;
    const sy = this.originY - this.y;
    const spring = 0.015;
    this.vx += sx * spring;
    this.vy += sy * spring;

    // Subtle idle continuous floating
    this.vx += Math.sin(time * 0.001 + this.randomSeed) * 0.03;
    this.vy += Math.cos(time * 0.0013 + this.randomSeed) * 0.03;

    // Damping / Friction
    this.vx *= 0.92;
    this.vy *= 0.92;

    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    let angle = this.baseAngle;
    
    // Align capsule with velocity when moving
    if (speed > 0.3) {
      angle = Math.atan2(this.vy, this.vx);
    } else {
      // Subtle idle rotation
      angle = this.baseAngle + Math.sin(this.randomSeed) * 0.1;
    }

    ctx.rotate(angle);
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.lineWidth = this.thickness;
    ctx.moveTo(-this.length / 2, 0);
    ctx.lineTo(this.length / 2, 0);
    
    // Subtle grey tone that adapts to dark/light environments implicitly
    ctx.strokeStyle = `rgba(130, 130, 140, ${this.opacity})`;
    ctx.stroke();
    ctx.restore();
  }
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Smooth mouse target state
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const initParticles = () => {
      particles = [];
      const numParticles = 350; // Hundreds of tiny dash/capsule particles
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      // Cover viewport and corners
      const maxRadius = Math.max(canvas.width, canvas.height) * 0.7; 

      for (let i = 0; i < numParticles; i++) {
        // Balanced radial pattern (Fibonacci spiral / golden angle)
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        const angle = i * Math.PI * 2 * goldenRatio;
        const radius = Math.sqrt(i / numParticles) * maxRadius;
        
        const originX = centerX + Math.cos(angle) * radius;
        const originY = centerY + Math.sin(angle) * radius;
        
        particles.push(new Particle(originX, originY, angle));
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", resize);
    resize(); // Initialize

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    
    const onMouseLeave = () => {
      // Move mouse offscreen gracefully
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const render = (time: number) => {
      // Ease mouse pos to simulate cursor inertia slightly
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.update(mouseX, mouseY, time);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none w-full h-full"
      style={{
        zIndex: -1, // Remain behind all content
        // Force GPU acceleration
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    />
  );
}
