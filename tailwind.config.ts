import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'], theme: { extend: { colors: { royal: '#1554d1', navy: '#071632', gold: '#d8a82f', ivory: '#fffaf0' }, boxShadow: { glow: '0 22px 70px rgba(21,84,209,.22)' } } }, plugins: [] };
export default config;
