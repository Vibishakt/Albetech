/* eslint-disable */
// Auto-ported from the AlbeTech design canvas (About.dc.html).
import React from 'react';
import { useLocation } from 'react-router-dom';
import { A, S } from '../dcShim';
import { graduationCap, food, energy, shopping, manufacturing, realestate, videoclip, socialmedia, fitness, trip, delivery, matrimony } from '../assets/svg/SvgFile.jsx';

const CSS = "\nbody{margin:0;background:#F5F7FC}\na{color:#1E40AF;text-decoration:none}a:hover{color:#0B1E5B}\nfooter a{text-decoration:underline;text-decoration-color:transparent;text-decoration-thickness:2px;text-underline-offset:5px;transition:color .2s ease,text-decoration-color .2s ease}\nfooter a:hover,footer a:focus-visible{color:#2F5BEA!important;text-decoration-color:transparent}\n@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}\n@keyframes floaty{0%,100%{translate:0 0}50%{translate:0 -10px}}\n@keyframes glow{0%,100%{opacity:.35;transform:translate(0,0) scale(1)}50%{opacity:.65;transform:translate(40px,-30px) scale(1.2)}}\n@keyframes shine{to{background-position:200% center}}\n@keyframes spin{to{transform:rotate(360deg)}}\n@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(47,91,234,.5)}100%{box-shadow:0 0 0 22px rgba(47,91,234,0)}}\n@keyframes dash{to{stroke-dashoffset:-40}}\n@keyframes grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}\n@keyframes twinkle{0%,100%{opacity:.2}50%{opacity:1}}\n@keyframes kenburns{from{transform:scale(1.05) translate(0,0)}to{transform:scale(1.18) translate(-2%,-2%)}}\n@keyframes wordIn{from{opacity:0;transform:translateY(40px) rotate(4deg);filter:blur(8px)}to{opacity:1;transform:none;filter:blur(0)}}\n@keyframes sweep{0%{transform:translateX(-120%) skewX(-18deg)}60%,100%{transform:translateX(320%) skewX(-18deg)}}\n@keyframes rise{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(-320px);opacity:0}}\n@keyframes gridMove{to{background-position:0 48px,48px 0}}\n@keyframes fanGlow{0%,100%{opacity:.35;transform:scale(.92)}50%{opacity:.9;transform:scale(1.08)}}\n@keyframes scrollDot{0%{transform:translateY(0);opacity:1}80%{transform:translateY(12px);opacity:0}100%{opacity:0}}\n@keyframes barShimmer{0%,100%{opacity:1}50%{opacity:.4}}\n.kenburns{animation:kenburns 18s ease-in-out infinite alternate}\n.word{display:inline-block;animation:wordIn .9s cubic-bezier(.2,.8,.2,1) both}\n.sweep{position:absolute;top:0;bottom:0;width:22%;background:linear-gradient(90deg,transparent,rgba(120,170,255,.18),transparent);animation:sweep 7s ease-in-out infinite;pointer-events:none}\n.particle{position:absolute;bottom:-10px;border-radius:50%;background:#7FA6FF;box-shadow:0 0 10px #3F7BFF;animation:rise linear infinite;pointer-events:none}\n.grid-move{animation:gridMove 6s linear infinite}\n.fan-glow{animation:fanGlow 3.5s ease-in-out infinite}\n.scroll-dot{animation:scrollDot 1.8s ease-in-out infinite}\n.svc-btn{background:none;border:0;font:inherit;font-weight:600;font-size:14px;color:#1E293B;cursor:pointer;display:inline-flex;align-items:center;gap:4px;padding:0}\n.svc-btn svg{transition:transform .25s ease}\n.svc.open .svc-btn{color:#2F5BEA}\n.svc.open .svc-btn svg{transform:rotate(180deg)}\n.mega{position:absolute;left:50%;top:calc(100% - 14px);padding-top:14px;width:min(880px,calc(100vw - 32px));transform:translate(-50%,12px);opacity:0;visibility:hidden;transition:opacity .25s ease,transform .25s ease,visibility .25s;z-index:60;text-align:left}\n.svc.open .mega{opacity:1;visibility:visible;transform:translate(-50%,0)}\n.mega-item{display:flex;align-items:center;gap:12px;padding:7px 10px;border-radius:8px;color:#1E293B!important;font-size:13.5px;font-weight:600;transition:background .2s ease,transform .2s ease}\n.mega-item:hover,.mega-item:focus-visible{background:#EEF2FF;transform:translateX(4px)}\n.mega-ic{flex:none;width:30px;height:30px;border-radius:8px;background:#EEF2FF;color:#1E3A8A;display:flex;align-items:center;justify-content:center;transition:background .2s ease,color .2s ease}\n.mega-item:hover .mega-ic{background:#1E3A8A;color:#FFFFFF}\n.sec-item{display:flex;align-items:center;gap:14px;padding:8px 0;color:#2A3350!important;font-size:16px;font-weight:400;transition:color .2s ease,transform .2s ease}\n.sec-item:hover,.sec-item:focus-visible{color:#1E3A8A!important;transform:translateX(4px)}\n.sec-dash{flex:none;width:10px;height:2px;background:#8FA6D8}\n.grad-dark{background:linear-gradient(90deg,#1E3A8A,#2F5BEA,#1E3A8A);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shine 5s linear infinite}\n.eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;color:#2F5BEA;letter-spacing:.12em;text-transform:uppercase;background:#FFFFFF;border:1px solid #D6E0F7;padding:6px 14px;border-radius:999px;box-shadow:0 4px 14px rgba(30,58,138,.06)}\n.eyebrow::before{content:\"\";width:6px;height:6px;border-radius:50%;background:#2F5BEA;box-shadow:0 0 0 4px rgba(47,91,234,.15)}\n.mvv-card{position:relative;overflow:hidden;background:#FFFFFF;border:1px solid #E2E8F5;border-radius:22px;padding:34px 30px 30px;box-shadow:0 10px 30px rgba(30,58,138,.07);transition:transform .4s ease,box-shadow .4s ease,border-color .4s ease;display:flex;flex-direction:column}\n.mvv-card::before{content:\"\";position:absolute;left:0;top:0;height:4px;width:100%;background:linear-gradient(90deg,#1E3A8A,#2F5BEA,#7FA6FF);transform:scaleX(0);transform-origin:left;transition:transform .6s cubic-bezier(.2,.7,.2,1)}\n.mvv-card::after{content:\"\";position:absolute;right:-70px;top:-70px;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(47,91,234,.14),transparent 70%);transition:transform .6s ease}\n.mvv-card:hover{transform:translateY(-8px);box-shadow:0 26px 50px rgba(30,58,138,.16);border-color:#B9C8F2}\n.mvv-card:hover::before{transform:scaleX(1)}\n.mvv-card:hover::after{transform:scale(1.4)}\n.mvv-num{position:absolute;right:24px;top:14px;font-size:64px;font-weight:800;line-height:1;color:rgba(30,58,138,.07);letter-spacing:-.04em}\n.mvv-ic{position:relative;z-index:1;width:62px;height:62px;border-radius:18px;background:linear-gradient(135deg,#3F6BFF,#0B1E5B);color:#FFFFFF;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 26px rgba(47,91,234,.35),inset 0 1px 0 rgba(255,255,255,.25);margin-bottom:22px}\n.mvv-title{position:relative;margin:0 0 10px;font-size:21px;font-weight:800;color:#0B1E5B}\n.mvv-text{position:relative;margin:0 0 20px;color:#475569;font-size:14.5px;line-height:1.65;flex-grow:1}\n.mvv-points{position:relative;display:flex;flex-direction:column;gap:8px;padding-top:18px;border-top:1px dashed #D6E0F7}\n.mvv-point{display:flex;align-items:center;gap:10px;font-size:13.5px;font-weight:600;color:#1E293B}\n.mvv-point svg{flex:none;width:22px;height:22px;padding:4px;box-sizing:border-box;border-radius:50%;background:#E3EAFF;color:#1E3A8A}\n.mvv-dark{background:linear-gradient(160deg,#1E3A8A 0%,#0B1E5B 55%,#071535 100%);border-color:#1E3A8A;box-shadow:0 22px 50px rgba(11,30,91,.35)}\n.mvv-dark .mvv-num{color:rgba(255,255,255,.08)}\n.mvv-dark .mvv-ic{background:#FFFFFF;color:#1E3A8A;box-shadow:0 12px 26px rgba(0,0,0,.25)}\n.mvv-dark .mvv-title{color:#FFFFFF}\n.mvv-dark .mvv-text{color:#C7D3F5}\n.mvv-dark .mvv-points{border-top-color:rgba(159,192,255,.3)}\n.mvv-dark .mvv-point{color:#FFFFFF}\n.mvv-dark .mvv-point svg{background:rgba(255,255,255,.14);color:#FFFFFF}\n.mvv-dark::after{background:radial-gradient(circle,rgba(127,166,255,.35),transparent 70%)}\n@supports (animation-timeline: view()){\n}\n@media (max-width:760px){\n}\n.zj{position:relative;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:18px}\n.zj-line{position:absolute;left:0;right:0;top:50%;height:4px;margin-top:-2px;border-radius:4px;background:linear-gradient(90deg,rgba(127,166,255,.2),#7FA6FF 12%,#2F5BEA 50%,#1E3A8A 88%,rgba(30,58,138,.2))}\n.zj-item{display:grid;grid-template-rows:200px 36px 64px 36px 200px;justify-items:center}\n.zj-node{grid-row:3;position:relative;z-index:1;width:64px;height:64px;border-radius:50%;background:#FFFFFF;color:#1E3A8A;border:3px solid #2F5BEA;box-shadow:0 10px 24px rgba(30,58,138,.18);display:flex;align-items:center;justify-content:center;transition:background .3s ease,color .3s ease,transform .3s ease}\n.zj-stem{width:2px;background:repeating-linear-gradient(180deg,#9FB6EA 0 4px,transparent 4px 8px)}\n.zj-card{position:relative;width:100%;box-sizing:border-box;background:#FFFFFF;border:1px solid #E2E8F5;border-radius:18px;padding:20px 18px;text-align:center;box-shadow:0 10px 28px rgba(30,58,138,.07);transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease}\n.zj-up .zj-card{grid-row:1;align-self:end}\n.zj-up .zj-stem{grid-row:2}\n.zj-down .zj-card{grid-row:5;align-self:start}\n.zj-down .zj-stem{grid-row:4}\n.zj-year{display:inline-block;font-size:12px;font-weight:800;color:#FFFFFF;background:linear-gradient(135deg,#2F5BEA,#1E3A8A);padding:4px 12px;border-radius:999px;margin-bottom:10px}\n.zj-title{margin:0 0 6px;font-size:16.5px;font-weight:800;color:#0B1E5B}\n.zj-text{margin:0;font-size:13.5px;line-height:1.6;color:#475569}\n.zj-item:hover .zj-card{transform:translateY(-4px);box-shadow:0 20px 40px rgba(30,58,138,.14);border-color:#B9C8F2}\n.zj-down:hover .zj-card{transform:translateY(4px)}\n.zj-item:hover .zj-node{background:#1E3A8A;color:#FFFFFF;transform:scale(1.1)}\n.zj-now .zj-node{background:linear-gradient(135deg,#3F6BFF,#1E3A8A);color:#FFFFFF;border-color:#FFFFFF;animation:pulse 2.2s ease-out infinite}\n.zj-now .zj-card{background:linear-gradient(150deg,#1E3A8A,#0B1E5B);border-color:#1E3A8A}\n.zj-now .zj-year{background:#FFFFFF;color:#1E3A8A}\n.zj-now .zj-title{color:#FFFFFF}\n.zj-now .zj-text{color:#C7D3F5}\n@keyframes zjUp{from{opacity:0;translate:0 30px}to{opacity:1;translate:0 0}}\n@keyframes zjDown{from{opacity:0;translate:0 -30px}to{opacity:1;translate:0 0}}\n@supports (animation-timeline: view()){.zj-up .zj-card{animation:zjUp linear both;animation-timeline:view();animation-range:entry 10% entry 80%}.zj-down .zj-card{animation:zjDown linear both;animation-timeline:view();animation-range:entry 10% entry 80%}}\n@media (max-width:900px){.zj{grid-template-columns:1fr;gap:20px;padding-left:40px}.zj-line{left:30px;right:auto;top:0;bottom:0;width:4px;height:auto;margin:0 0 0 -2px;background:linear-gradient(180deg,#7FA6FF,#2F5BEA,#1E3A8A)}.zj-item{display:flex;align-items:center;gap:16px;margin-left:-40px}.zj-stem{display:none}.zj-node{flex:none;width:56px;height:56px;order:-1;margin-left:2px}.zj-card{text-align:left}.zj-down:hover .zj-card{transform:translateY(-4px)}}\n.ft{position:relative;overflow:hidden;background:linear-gradient(180deg,#FFFFFF 0%,#F4F7FE 100%);color:#334155;border-top:1px solid #E2E8F5}\n.ft::before{content:\"\";position:absolute;left:0;right:0;top:0;height:4px;background:linear-gradient(90deg,#7FA6FF,#2F5BEA,#1E3A8A,#2F5BEA,#7FA6FF);background-size:200% 100%;animation:shine 8s linear infinite}\n.ft-glow{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none}\n.ft-glow1{width:340px;height:340px;left:-120px;top:-80px;background:rgba(127,166,255,.28)}\n.ft-glow2{width:300px;height:300px;right:-100px;bottom:-60px;background:rgba(47,91,234,.16)}\n.ft-wrap{position:relative;z-index:1;max-width:1240px;margin:0 auto;padding:56px 24px 0}\n.ft-grid{display:grid;grid-template-columns:1.6fr repeat(3,1fr) 1.3fr;gap:36px}\n.ft-logo{display:inline-flex;align-items:center;gap:10px;text-decoration:none!important}\n.ft-logo img{display:block;height:36px;width:auto}\n.ft-mark{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#3F6BFF,#1E3A8A);color:#FFFFFF;font-weight:800;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 20px rgba(47,91,234,.3)}\n.ft-word{font-weight:800;font-size:24px;color:#0B1E5B;letter-spacing:-.02em}\n.ft-about{margin:18px 0 22px;font-size:14px;line-height:1.7;color:#475569;max-width:320px}\n.ft-contact{display:flex;flex-direction:column;gap:12px}\n.ft-ci{display:flex;align-items:center;gap:12px;font-size:14px;color:#1E293B!important;text-decoration:none!important}\n.ft-ci-ic{flex:none;width:36px;height:36px;border-radius:10px;background:#FFFFFF;border:1px solid #DCE4F7;color:#2F5BEA;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(30,58,138,.06);transition:background .25s ease,color .25s ease,transform .25s ease}\n.ft-ci:hover .ft-ci-ic{background:#2F5BEA;color:#FFFFFF;transform:translateY(-2px)}\n.ft-social{display:flex;flex-wrap:wrap;gap:4px;margin-top:22px}\n.ft-soc{font-size:12.5px;font-weight:600;color:#1E3A8A!important;background:#FFFFFF;border:1px solid #DCE4F7;padding:7px 14px;border-radius:999px;text-decoration:none!important;transition:background .25s ease,color .25s ease,border-color .25s ease}\n.ft-soc:hover{background:#1E3A8A;color:#FFFFFF!important;border-color:#1E3A8A}\n.ft-h{position:relative;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#0B1E5B;padding-top:14px;margin-bottom:18px}\n.ft-h::before{content:\"\";position:absolute;left:0;top:0;width:28px;height:3px;border-radius:3px;background:linear-gradient(90deg,#2F5BEA,#7FA6FF)}\n.ft-links{display:flex;flex-direction:column;gap:11px}\n.ft-link{display:inline-flex;align-items:center;gap:8px;font-size:14px;color:#334155!important;text-decoration:none!important;transition:color .2s ease,transform .2s ease}\n.ft-dash{width:8px;height:2px;border-radius:2px;background:#9FB6EA;transition:width .25s ease,background .25s ease}\n.ft-link:hover{color:#1E3A8A!important;transform:translateX(3px)}\n.ft-link:hover .ft-dash{width:16px;background:#2F5BEA}\n.ft-sub{margin:0 0 16px;font-size:14px;line-height:1.6;color:#475569}\n.ft-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}\n.ft-input{display:flex;align-items:center;gap:10px;background:#FFFFFF;border:1px solid #CBD5F0;border-radius:12px;padding:0 14px;color:#2F5BEA;transition:border-color .2s ease,box-shadow .2s ease}\n.ft-input:focus-within{border-color:#2F5BEA;box-shadow:0 0 0 4px rgba(47,91,234,.12)}\n.ft-input input{flex:1;min-width:0;border:0;outline:0;background:transparent;font:inherit;font-size:14px;color:#0F172A;padding:13px 0}\n.ft-btn{width:100%;margin-top:10px;padding:13px 16px;border:0;border-radius:12px;background:linear-gradient(135deg,#2F5BEA,#1E3A8A);color:#FFFFFF;font:inherit;font-weight:700;font-size:14.5px;cursor:pointer;box-shadow:0 12px 24px rgba(47,91,234,.3);transition:transform .2s ease,box-shadow .2s ease}\n.ft-btn:hover{transform:translateY(-2px);box-shadow:0 16px 30px rgba(47,91,234,.4)}\n.ft-chip{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#1E3A8A;background:#FFFFFF;border:1px solid #CBD5F0;padding:8px 14px;border-radius:999px}\n.ft-bottom{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;margin-top:56px;padding:22px 0;border-top:1px solid #DCE4F7;font-size:13px;color:#64748B}\n.ft-legal{display:flex;gap:10px;align-items:center}\n.ft-legal a{color:#475569!important}\n.ft-watermark{position:relative;z-index:0;text-align:center;font-size:clamp(90px,19vw,370px);font-weight:800;letter-spacing:-.04em;line-height:.78;margin-top:10px;color:transparent;background:linear-gradient(180deg,#9AA9DC 0%,#B8C3EA 60%,#D6DCF3 100%);-webkit-background-clip:text;background-clip:text;opacity:.75;user-select:none;pointer-events:none;height:.68em;overflow:hidden}\n.ft-cta{position:relative;overflow:hidden;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;margin-bottom:64px;padding:40px 44px;border-radius:24px;background:linear-gradient(90deg,#0E65BF 0%,#000000 46%,#000000 61%,#0A528F 100%);color:#FFFFFF;box-shadow:0 24px 50px rgba(10,40,90,.35)}\n.ft-cta-ring{position:absolute;border-radius:50%;border:2px solid rgba(255,255,255,.18);pointer-events:none}\n.ft-cta-ring1{width:260px;height:260px;right:-60px;top:-120px;animation:spin 30s linear infinite;border-style:dashed}\n.ft-cta-ring2{width:180px;height:180px;right:140px;bottom:-110px}\n.ft-cta-dots{position:absolute;left:0;top:0;bottom:0;width:40%;background-image:radial-gradient(rgba(255,255,255,.18) 1.2px,transparent 1.6px);background-size:16px 16px;-webkit-mask-image:linear-gradient(90deg,#000,transparent);mask-image:linear-gradient(90deg,#000,transparent);pointer-events:none}\n.ft-cta-text{position:relative}\n.ft-cta-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.25);padding:6px 12px;border-radius:999px}\n.ft-live{width:8px;height:8px;border-radius:50%;background:#4ADE80;box-shadow:0 0 0 0 rgba(74,222,128,.6);animation:ftLive 1.8s ease-out infinite}\n@keyframes ftLive{0%{box-shadow:0 0 0 0 rgba(74,222,128,.6)}100%{box-shadow:0 0 0 10px rgba(74,222,128,0)}}\n.ft-cta-title{margin:14px 0 0;font-size:clamp(22px,2.6vw,32px);line-height:1.25;font-weight:800;letter-spacing:-.01em}\n.ft-cta-actions{position:relative;display:flex;flex-wrap:wrap;gap:12px}\n.ft-cta-btn{display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:999px;background:#FFFFFF;color:#1E3A8A!important;font-weight:700;text-decoration:none!important;box-shadow:0 10px 24px rgba(11,30,91,.25);transition:transform .2s ease}\n.ft-cta-btn:hover{transform:translateY(-2px)}\n.ft-cta-ghost{display:inline-flex;align-items:center;gap:8px;padding:14px 22px;border-radius:999px;border:1px solid rgba(255,255,255,.5);color:#FFFFFF!important;font-weight:700;text-decoration:none!important;transition:background .2s ease}\n.ft-cta-ghost:hover{background:rgba(255,255,255,.14)}\n.ft-news{position:relative;align-self:start;background:#FFFFFF;border-radius:20px;padding:22px 20px 22px;box-shadow:0 18px 40px rgba(30,58,138,.1);border:1px solid transparent;background-image:linear-gradient(#FFFFFF,#FFFFFF),linear-gradient(135deg,#7FA6FF,#2F5BEA,#1E3A8A);background-origin:border-box;background-clip:padding-box,border-box}\n.ft-top{width:36px;height:36px;border-radius:50%;margin-left:8px;background:linear-gradient(135deg,#2F5BEA,#1E3A8A);color:#FFFFFF!important;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 8px 18px rgba(47,91,234,.3);transition:transform .25s ease}\n.ft-top:hover{transform:translateY(-3px)}\n.ft-made{margin-left:8px;color:#475569}\n.ft-heart{display:inline-block;color:#2F5BEA;animation:ftBeat 1.4s ease-in-out infinite}\n@keyframes ftBeat{0%,100%{transform:scale(1)}20%{transform:scale(1.3)}40%{transform:scale(1)}}\n.ft-mark{position:relative;overflow:hidden}\n.ft-mark::after{content:\"\";position:absolute;inset:0;background:linear-gradient(110deg,transparent 35%,rgba(255,255,255,.55) 50%,transparent 65%);background-size:250% 100%;animation:ftSheen 4s ease-in-out infinite}\n@keyframes ftSheen{0%,60%{background-position:150% 0}100%{background-position:-100% 0}}\n.ft-h::after{content:\"\";position:absolute;left:34px;top:0;width:6px;height:3px;border-radius:3px;background:#7FA6FF}\n@media (max-width:700px){.ft-cta{padding:30px 24px}}\n@media (max-width:1000px){.ft-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ft-brand{grid-column:1/-1}}\n@media (max-width:560px){.ft-grid{grid-template-columns:1fr}}\n.tb{background:#0B1E5B;border-bottom:1px solid #0B1E5B;font-size:12.5px}.tb .tb-left a,.tb .tb-left span,.tb a,.tb span{color:#fff!important}.tb .soc-ic{background-position-y:-26.5px!important}\n.tb-in{max-width:1840px;margin:0 auto;padding:6px 48px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px}\n.tb-left{display:flex;flex-wrap:wrap;gap:22px;align-items:center}\n.tb-left a,.tb-left span{display:inline-flex;align-items:center;gap:7px;color:#1E3A8A!important}\n.tb-soc{display:flex;gap:4px}\n.soc-ic{display:block;width:26px;height:26px;border-radius:50%;background-image:url(/design/79119113581d5bb9b9f3236fa7f54218.png);background-repeat:no-repeat;background-size:162px 53px;transition:transform .2s ease,filter .2s ease}\n.soc-ic:hover{transform:translateY(-2px);filter:brightness(.92)}\n.hd{background:#FFFFFF;border-bottom:1px solid #E6EAF3;position:relative;z-index:50}\n.hd-in{position:relative;max-width:1840px;margin:0 auto;padding:16px 48px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px}\n.hd-logo img{display:block;height:30px;width:auto}\n.hd-nav{display:flex;flex-wrap:wrap;gap:28px;font-weight:500;font-size:14px;align-items:center}\n.hd-link{display:inline-flex;align-items:center}\n.hd-cta{display:flex;gap:10px;align-items:center}\n.hd-quote{padding:10px 24px;border:1px solid #1E3A8A;border-radius:999px;color:#1E3A8A!important;font-size:14px;font-weight:500;transition:background .2s ease}\n.hd-quote:hover{background:#EEF2FF}\n.hd-call{display:inline-flex;align-items:center;gap:8px;padding:11px 24px;border-radius:999px;background:#1E3A8A;color:#FFFFFF!important;font-size:14px;font-weight:500;transition:transform .2s ease,box-shadow .2s ease}\n.hd-call:hover{transform:translateY(-1px);box-shadow:0 10px 20px rgba(30,58,138,.3)}\n.ah{position:relative;overflow:hidden;background:#06152F;color:#FFFFFF;min-height:clamp(320px,32vw,626px);display:flex;align-items:center}\n.ah-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}\n.ah-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,18,44,.75) 0%,rgba(4,18,44,.25) 45%,transparent 70%)}\n.ah-in{position:relative;width:100%;padding:0 8.4%}\n.ah-title{margin:0;font-size:clamp(38px,4.2vw,82px);line-height:1.38;font-weight:400;letter-spacing:-0.01em;background:linear-gradient(180deg,#FFFFFF 45%,#C9D8F0);-webkit-background-clip:text;background-clip:text;color:transparent}\n.ah-title .word{-webkit-text-fill-color:transparent}\n.ah-blue{background:linear-gradient(90deg,#1E64C8,#2F7BE0 60%,#1E5FC0);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}\n.ah-dash{display:flex;flex-direction:column;gap:6px;margin-top:14px}\n.ah-dash span{display:flex;gap:6px}\n.ah-dash i{display:block;height:2px;width:18px;border-radius:2px}\n.ah-dash i.b{background:#2F7BE0}\n.ah-dash i.w{background:#FFFFFF}\n.ab-sec{background:radial-gradient(ellipse at 0% 10%,rgba(159,184,245,.45),transparent 40%),#E8EDF8}\n.ab-binary{position:absolute;right:0;top:0;bottom:0;width:38%;font-family:ui-monospace,Menlo,monospace;font-size:11px;line-height:1.5;letter-spacing:2px;color:rgba(127,166,255,.22);overflow:hidden;word-break:break-all;padding:10px;pointer-events:none;-webkit-mask-image:linear-gradient(90deg,transparent,#000 40%);mask-image:linear-gradient(90deg,transparent,#000 40%)}\n.tm-sec{background:linear-gradient(180deg,#E8EDF8 0%,#EEF2FB 40%,#F4F6FC 100%);padding:40px 24px 120px}\n.tm-in{max-width:1610px;margin:0 auto;text-align:center}\n.tm-title{margin:0 0 14px;font-size:clamp(34px,3.8vw,72px);font-weight:700;color:#1E3A8A;letter-spacing:-0.01em}\n.tm-sub{margin:0 auto 44px;max-width:820px;font-size:clamp(15px,1.25vw,24px);line-height:1.45;color:#1E40AF}\n.tm-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px 20px;max-width:1610px;margin:0 auto}\n.tm-card{position:relative;display:block;aspect-ratio:1;border-radius:4px;overflow:hidden;box-shadow:0 10px 26px rgba(15,23,42,.12);transition:transform .4s ease,box-shadow .4s ease;text-align:left}\n.tm-photo{position:absolute;inset:0;background-size:400% 200%;background-repeat:no-repeat;transition:transform .5s ease}\n.tm-info{position:absolute;left:0;right:0;bottom:0;padding:18px 22px;display:flex;flex-direction:column;gap:2px;background:linear-gradient(180deg,rgba(39,62,214,.92),rgba(12,22,140,.97));transform:translateY(101%);transition:transform .4s ease}\n.tm-name{font-size:clamp(15px,1.25vw,24px);font-weight:600;color:#FFFFFF}\n.tm-role{font-size:clamp(12px,.9vw,17px);color:#D3DDF7}\n.tm-card:hover{transform:scale(1.07);z-index:2;box-shadow:0 24px 50px rgba(15,23,42,.25)}\n.tm-card:hover .tm-info,.tm-card:focus-visible .tm-info,.tm-feat .tm-info{transform:none}\n.tm-feat{transform:scale(1.07);z-index:1;box-shadow:0 24px 50px rgba(15,23,42,.2)}\n.tm-grid:hover .tm-feat:not(:hover){transform:none;box-shadow:0 10px 26px rgba(15,23,42,.12)}\n.tm-grid:hover .tm-feat:not(:hover) .tm-info{transform:translateY(101%)}\n.soc-ft{display:block;width:34px;height:34px;border-radius:50%;background-image:url(/design/79119113581d5bb9b9f3236fa7f54218.png);background-repeat:no-repeat;background-size:204px 67px;transition:transform .2s ease,filter .2s ease}\n.soc-ft:hover{transform:translateY(-2px);filter:brightness(.93)}\n@media (max-width:900px){.tm-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.hd-in,.tb-in{padding-left:20px;padding-right:20px}}\n.a-up{animation:fadeUp .9s cubic-bezier(.2,.7,.2,1) both}\n.d1{animation-delay:.15s}.d2{animation-delay:.3s}.d3{animation-delay:.45s}\n.grad-txt{background:linear-gradient(90deg,#3F7BFF,#9FC0FF,#3F7BFF);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shine 4s linear infinite}\n.orb{position:absolute;border-radius:50%;filter:blur(70px);pointer-events:none;animation:glow 10s ease-in-out infinite}\n.float{animation:floaty 4s ease-in-out infinite}\n.spin{animation:spin 30s linear infinite}\n.pulse{animation:pulse 2.2s ease-out infinite}\n.dash{stroke-dasharray:6 6;animation:dash 2s linear infinite}\n.bar-grow{transform-origin:left;animation:grow 1.2s .5s cubic-bezier(.2,.7,.2,1) both}\n.twinkle{animation:twinkle 3s ease-in-out infinite}\n.lift{transition:transform .3s ease,box-shadow .3s ease}\n.lift:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(30,58,138,.18)!important}\n.btn{transition:transform .2s ease,box-shadow .2s ease,filter .2s ease}\n.btn:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(47,91,234,.35);filter:brightness(1.1)}\n.tilt{transition:transform .5s ease}\n.tilt:hover{transform:perspective(900px) rotateY(0deg) scale(1.02)!important}\n.team-card .team-info{transform:translateY(101%);transition:transform .35s ease}\n.team-card:hover .team-info,.team-card:focus-within .team-info{transform:none}\n.team-card .team-photo{transition:transform .5s ease}\n.team-card:hover .team-photo{transform:scale(1.06)}\n@supports (animation-timeline: view()){.reveal{animation:fadeUp linear both;animation-timeline:view();animation-range:entry 0% entry 45%}}\n@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation:none!important;transition:none!important}}\n.abx-wrap{max-width:1330px;margin:0 auto;padding-right:130px;box-sizing:border-box;display:flex;justify-content:flex-start}\n.abx{position:relative;width:1200px;max-width:100%;min-height:640px;display:flex;align-items:center;color:#fff;cursor:pointer;transform:perspective(1200px) rotate(-5deg);transition:transform .6s cubic-bezier(.2,.7,.2,1)}\n.abx:hover{transform:perspective(1200px) rotate(0deg) scale(1.01)}\n.abx-bg{position:absolute;inset:0;border-radius:35px;overflow:hidden;z-index:0;transition:transform .6s cubic-bezier(.2,.7,.2,1),opacity .6s ease}\n.abx-bg img{width:100%;height:100%;object-fit:fill;display:block;border-radius:35px}\n.abx-bg1{transform:rotate(5deg);opacity:1}\n.abx-bg2{opacity:0}\n.abx:hover .abx-bg1{transform:rotate(0deg) scale(1.03);opacity:0}\n.abx:hover .abx-bg2{transform:rotate(0deg) scale(1.03);opacity:1}\n.abx-body{position:relative;z-index:2;box-sizing:border-box;width:100%;max-width:760px;padding:70px 80px;transform:rotate(5deg);transition:transform .6s cubic-bezier(.2,.7,.2,1)}\n.abx:hover .abx-body{transform:rotate(0deg)}\n.abx-h2{margin:0 0 22px;font-size:86px;line-height:1;font-weight:700;letter-spacing:-.01em}\n.abx-p{margin:0 0 14px;font-size:16px;line-height:1.35;color:rgba(255,255,255,.94)}\n.abx-btn{display:inline-block;margin-top:30px;padding:15px 38px;border-radius:12px;background:#0C5BB5;color:#fff!important;font-size:20px;font-weight:600;transition:transform .2s ease,background .2s ease}\n.abx-btn:hover{background:#1572dc;transform:scale(1.05)}\n.abx-img{position:absolute;right:-130px;top:50%;z-index:3;transform:translateY(-50%) rotate(5deg);transition:transform .6s cubic-bezier(.2,.7,.2,1),opacity .6s ease}\n.abx-img img{display:block;width:560px;border-radius:30px}\n.abx-img2{opacity:0}\n.abx:hover .abx-img{transform:translateY(-50%) rotate(0deg) scale(1.03)}\n.abx:hover .abx-img1{opacity:0}\n.abx:hover .abx-img2{opacity:1}\n@media (max-width:1380px){.abx-wrap{padding-right:70px}.abx-img{right:-70px}.abx-img img{width:480px}.abx-body{max-width:640px;padding:60px 40px 60px 70px}.abx-h2{font-size:72px}}\n@media (max-width:991px){.abx{transform:none!important;min-height:0;display:flex;flex-direction:column;overflow:hidden;border-radius:22px;box-shadow:0 16px 48px rgba(0,0,0,.4)}.abx-bg{border-radius:22px}.abx-bg1,.abx:hover .abx-bg1{transform:none;opacity:1}.abx-bg2{display:none}.abx-body,.abx:hover .abx-body{transform:none;padding:28px;max-width:none;order:2}.abx-h2{font-size:40px}.abx-btn{font-size:16px;padding:14px 28px}.abx-img,.abx:hover .abx-img{position:relative;right:auto;top:auto;transform:none;order:1;height:220px;overflow:hidden;opacity:1}.abx-img img{width:100%;height:100%;object-fit:cover;border-radius:0}.abx-img2{display:none}.abx:hover .abx-img1{opacity:1}}\n";
const SV_CSS = `
.sv-hero{background:linear-gradient(135deg,#EEF2FF 0%,#E6ECFE 55%,#D3DEFA 100%);padding:34px 24px 64px}
.sv-wrap{max-width:1120px;margin:0 auto}
.sv-hero-in{display:grid;grid-template-columns:1.15fr .85fr;gap:40px;align-items:center}
.sv-bc{display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:#0B1E5B;margin-bottom:14px}
.sv-bc a{color:#0B1E5B}
.sv-pill{display:inline-flex;align-items:center;gap:7px;padding:6px 14px;border-radius:999px;background:#E3EAFF;border:1px solid #C9D6FA;color:#2F5BEA;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
.sv-pill-dot{width:6px;height:6px;border-radius:50%;background:#2F5BEA}
.sv-h1{margin:18px 0 16px;font-size:clamp(30px,4.4vw,44px);line-height:1.2;font-weight:800;letter-spacing:-.02em;color:#0F172A}
.sv-h1 span{color:#12266B}
.sv-lead{max-width:480px;margin:0 0 16px;color:#334155;font-size:14.5px;line-height:1.75}
.sv-free{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;background:#E3EAFF;border:1px solid #C9D6FA;color:#1E3A8A;font-size:11.5px;font-weight:600}
.sv-orbit{position:relative;width:min(340px,78vw);aspect-ratio:1;margin:0 auto}
.sv-ring{position:absolute;border-radius:50%;left:50%;top:50%;transform:translate(-50%,-50%)}
.sv-ring.r1{width:100%;height:100%;border:1.5px dashed #AFC2F2}
.sv-ring.r2{width:52%;height:52%;border:1px solid #C9D6FA;background:rgba(255,255,255,.35)}
.sv-ring.r3{width:68%;height:68%;border:1px solid #D5DFFB}
.sv-core{position:absolute;left:50%;top:50%;width:84px;height:84px;margin:-42px 0 0 -42px;border-radius:22px;display:flex;align-items:center;justify-content:center;box-shadow:0 18px 40px rgba(30,58,138,.35)}
.sv-node{position:absolute;width:42px;height:42px;margin:-21px 0 0 -21px;border-radius:12px;background:#fff;color:#1E3A8A;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 22px rgba(30,58,138,.16);animation:floaty 5s ease-in-out infinite}
.sv-body{padding:72px 24px 96px;background:linear-gradient(180deg,#F5F8FF 0%,#fff 60%)}
.sv-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:40px;align-items:start}
.sv-title{margin:0 0 10px;font-size:34px;font-weight:800;letter-spacing:-.02em;color:#0B1E5B}
.sv-title span{color:#2F5BEA}
.sv-sub{margin:0 0 26px;color:#475569;font-size:15px;line-height:1.7}
.sv-cards{display:flex;flex-direction:column;gap:16px}
.sv-cc{display:flex;gap:18px;align-items:flex-start;padding:20px 22px;border:1px solid #DCE5F8;border-left:4px solid #2F5BEA;border-radius:16px;background:#fff;box-shadow:0 6px 18px rgba(30,58,138,.06);transition:box-shadow .2s ease,transform .2s ease}
.sv-cc:hover{box-shadow:0 16px 34px rgba(30,58,138,.14);transform:translateY(-3px)}
.sv-cc-ic{flex:none;width:46px;height:46px;border-radius:13px;background:linear-gradient(145deg,#2F5BEA,#1E3A8A);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 18px rgba(47,91,234,.3)}
.sv-cc-ic svg{width:22px;height:22px}
.sv-cc-lb{font-size:13px;font-weight:800;letter-spacing:.08em;color:#2F5BEA;text-transform:uppercase;margin-bottom:6px}
.sv-cc-tx{font-size:16px;font-weight:600;line-height:1.65;color:#0F172A}
.sv-cc-tx a{color:#0F172A;text-decoration:none;border-bottom:1px solid #AFC2F2}
.sv-cc-tx a:hover{color:#2F5BEA}
.sv-cc-mu{font-size:13.5px;color:#475569;margin-top:4px}
.sv-follow{margin-top:28px;font-size:13px;font-weight:800;letter-spacing:.08em;color:#0B1E5B;text-transform:uppercase}
.sv-soc{display:flex;gap:12px;margin-top:12px}
.sv-soc a{width:42px;height:42px;border-radius:12px;background:#E3EAFF;color:#1E3A8A;display:flex;align-items:center;justify-content:center;transition:background .2s ease,color .2s ease,transform .2s ease}
.sv-soc a svg{width:19px;height:19px}
.sv-soc a:hover{background:#1E3A8A;color:#fff;transform:translateY(-3px)}
.sv-form{padding:36px 32px 32px;border:1px solid #DCE5F8;border-top:5px solid #2F5BEA;border-radius:20px;background:#fff;box-shadow:0 24px 60px rgba(30,58,138,.12)}
.sv-form h2{margin:0 0 6px;font-size:26px;font-weight:800;letter-spacing:-.01em;color:#0B1E5B}
.sv-form .sv-sub{margin-bottom:0}
.sv-row{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.sv-f{margin-top:20px}
.sv-lb{display:block;margin-bottom:8px;font-size:13px;font-weight:700;letter-spacing:.03em;color:#0B1E5B}
.sv-in{width:100%;box-sizing:border-box;border:1.5px solid #CBD5EA;border-radius:12px;padding:14px 16px;font:inherit;font-size:15px;color:#0F172A;background:#F8FAFF;outline:none;transition:border-color .2s ease,box-shadow .2s ease,background .2s ease}
.sv-in::placeholder{color:#7C8AA5}
.sv-in:hover{border-color:#9FB4EE}
.sv-in:focus{border-color:#2F5BEA;background:#fff;box-shadow:0 0 0 4px rgba(47,91,234,.16)}
textarea.sv-in{min-height:130px;resize:vertical}
.sv-opts{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.sv-opt{display:flex;align-items:center;gap:9px;padding:12px 14px;border:1.5px solid #CBD5EA;border-radius:10px;background:#F8FAFF;font-size:13px;font-weight:600;color:#1E293B;cursor:pointer;transition:background .2s ease,border-color .2s ease;user-select:none}
.sv-opt:hover{border-color:#6F8FEA;background:#EEF3FF}
.sv-opt.on{background:#E3EAFF;border-color:#2F5BEA;color:#1E3A8A;font-weight:700}
.sv-opt input{margin:0;width:16px;height:16px;flex:none;accent-color:#2F5BEA}
.sv-opt.chip{justify-content:center;padding:12px}
.sv-opt.chip input{display:none}
.sv-btn{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;margin-top:28px;padding:17px;border:0;border-radius:12px;background:linear-gradient(90deg,#2F5BEA,#0B2A6B);color:#fff;font:inherit;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 12px 26px rgba(47,91,234,.3);transition:transform .2s ease,box-shadow .2s ease}
.sv-btn:hover{transform:translateY(-2px);box-shadow:0 18px 36px rgba(11,42,107,.35)}
.sv-ok{margin-top:16px;padding:14px 16px;border-radius:12px;background:#ECFDF3;border:1px solid #BBF0D0;color:#166534;font-size:14.5px;line-height:1.55}
@media(max-width:880px){.sv-hero-in,.sv-grid{grid-template-columns:1fr}.sv-orbit{margin-top:8px}}
@media(max-width:560px){.sv-row{grid-template-columns:1fr}.sv-opts{grid-template-columns:1fr 1fr}.sv-hero{padding-bottom:44px}.sv-body{padding:44px 16px 64px}.sv-form{padding:26px 18px 24px}.sv-title{font-size:28px}.sv-form h2{font-size:23px}.sv-cc{padding:16px}.sv-cc-tx{font-size:15px}}
.sv-loc{padding:0 24px 80px;background:#fff;border-top:3px solid #AFC2F2}
.sv-kicker{font-size:13px;font-weight:800;letter-spacing:.08em;color:#2F5BEA;text-transform:uppercase}
.sv-loc-h{margin:8px 0 10px;font-size:34px;font-weight:800;letter-spacing:-.02em;color:#0B1E5B}
.sv-loc-h span{color:#2F5BEA}
.sv-addr{display:flex;align-items:center;gap:8px;margin:0 0 20px;font-size:15px;color:#334155}
.sv-map{position:relative;height:300px;border-radius:18px;overflow:hidden;border:1px solid #DDE5F5;background:#EDF0F8;box-shadow:0 14px 34px rgba(30,58,138,.10)}
.sv-map svg.sv-map-art{position:absolute;inset:0;width:100%;height:100%}
.sv-map-card{position:absolute;left:16px;top:16px;max-width:250px;padding:16px;border-radius:14px;background:#fff;box-shadow:0 10px 28px rgba(30,58,138,.18)}
.sv-map-card b{display:block;font-size:16px;color:#0B1E5B}
.sv-map-card p{margin:6px 0 12px;font-size:13px;line-height:1.55;color:#475569}
.sv-map-btns{display:flex;gap:8px}
.sv-map-open{display:inline-flex;align-items:center;gap:6px;padding:9px 14px;border-radius:9px;background:#1E40AF;color:#fff!important;font-size:13px;font-weight:700}
.sv-map-dir{display:inline-flex;align-items:center;justify-content:center;width:38px;height:36px;border-radius:9px;background:#E3EAFF;color:#1E3A8A}
.sv-cta{padding:72px 24px 76px;text-align:center;background:linear-gradient(180deg,#fff,#EAF0FF);border-top:1px solid #E8EDF8}
.sv-cta h2{max-width:620px;margin:10px auto 14px;font-size:36px;line-height:1.25;font-weight:800;letter-spacing:-.02em;color:#0B1E5B}
.sv-cta h2 span{color:#2F5BEA}
.sv-cta p{max-width:480px;margin:0 auto 26px;font-size:16px;line-height:1.7;color:#334155}
.sv-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:wrap}
.sv-cta-btns a{display:inline-flex;align-items:center;gap:8px;padding:15px 28px;border-radius:12px;font-size:15px;font-weight:700;transition:transform .2s ease,box-shadow .2s ease}
.sv-cta-btns a:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(11,42,107,.18)}
.sv-cta-a{background:linear-gradient(90deg,#0B63C5,#0B2A6B);color:#fff!important}
.sv-cta-b{background:#fff;border:1px solid #D5DEF2;color:#0B1E5B!important}
@media(max-width:560px){.sv-loc{padding:0 16px 50px}.sv-map-card{max-width:210px}.sv-loc-h,.sv-cta h2{font-size:27px}}
`;


function renderVals(state, setState) {
    var I = {
      users: 'M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 20v-2a4 4 0 0 0-3-3.9M16 2.1a4 4 0 0 1 0 7.8',
      rocket: 'M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 15l-3-3c1-4 4-8 12-9-1 8-5 11-9 12zM15 9h.01',
      target: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
      eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
      heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z',
      flag: 'M4 22V4M4 4h13l-2 4 2 4H4',
      code: 'M8 6l-6 6 6 6M16 6l6 6-6 6',
      globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20',
      cpu: 'M6 6h12v12H6zM9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4',
      shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
      chart: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
      clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
      star: 'M12 2l3 7 7 .6-5.3 4.7L18.2 22 12 18l-6.2 4 1.5-7.7L2 9.6 9 9z'
    };
    var navItems = [['Home','Main.dc.html'],['About us','About.dc.html'],['Services','#'],['Sectors','#'],['Careers','Careers.dc.html'],['Contact us','/contact']];
    var bgs = ['linear-gradient(160deg,#4A6FB5,#1B2F5E)','linear-gradient(160deg,#5C7DA8,#22365F)','linear-gradient(160deg,#3E5E9E,#16264D)','linear-gradient(160deg,#6A86B8,#26407A)'];
    var team = [
      ['Albert orestes','CEO & Founder','orisir.PNG'],
    
      ['Muhammed Suhail','Managing partner/HR','msuhail.jpeg'],
      ['Sreekutty','Accountant','sreekutty.png'],
      ['Sooraj G.R','Business Analyst','SOORAJ.jpeg'],
      ['Kaveri K.K','Digital marketing consultant','kyaveri.PNG'],
      ['Sreeja J','Developer','sreeja.jpeg'],
      ['Abhijith p','Developer','abhijith.jpeg'],
     
    ];
    var MP = {
      code: 'M8 6l-6 6 6 6M16 6l6 6-6 6', globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20',
      phone: 'M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM11 18h2', monitor: 'M3 4h18v12H3zM8 20h8M12 16v4',
      cloudUp: 'M7 18a5 5 0 1 1 .9-9.9A6 6 0 0 1 19 10a4 4 0 0 1 0 8zM12 16v-5M9.5 13.5L12 11l2.5 2.5', building: 'M4 21V5l8-3v19M12 9h8v12M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2M2 21h20',
      bag: 'M5 7h14l-1 14H6zM9 7a3 3 0 0 1 6 0', mega: 'M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1zM17 8a5 5 0 0 1 0 8',
      trend: 'M3 3v18h18M7 15l4-4 3 3 6-6', search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',
      share: 'M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4',
      video: 'M3 6h12v12H3zM15 10l6-3v10l-6-3', brush: 'M18 3l3 3-9 9-3-3zM9 12c-3 0-5 2-5 5 0 1-1 2-2 2 2 2 7 2 9-1 1-2 0-4-2-6z',
      doc: 'M6 2h9l5 5v15H6zM14 2v6h6M9 13h6M9 17h6', image: 'M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M15.5 9.5h.01',
      pen: 'M12 19l7-7 3 3-7 7zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.6 7.6M11 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', box: 'M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8',
      cpu: 'M6 6h12v12H6zM9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4', robot: 'M5 8h14v11H5zM12 4v4M9 13h.01M15 13h.01M9 16h6M2 12v3M22 12v3',
      cloud: 'M7 18a5 5 0 1 1 .9-9.9A6 6 0 0 1 19 10a4 4 0 0 1 0 8z', gear: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1',
      db: 'M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3zM4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3', bulb: 'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V16h8v-1.3A7 7 0 0 0 12 2z'
    };
    function mk(list) { return list.map(function (x) { return { label: x[0], icon: MP[x[1]] }; }); }
    var MEGA = [
      { title: 'Development', icon: MP.code, items: mk([['Web Development','globe'],['Mobile App Development','phone'],['Desktop Software','monitor'],['SaaS Development','cloudUp'],['Enterprise Software','building'],['Ecommerce Solutions','bag']]) },
      { title: 'Marketing & Design', icon: MP.mega, items: mk([['Digital Marketing','trend'],['SEO Services','search'],['Social Media Marketing','share'],['Video Production','video'],['Branding & Identity','brush'],['Brochure Design','doc'],['Poster Design','image'],['Logo Design','pen'],['Product Cover Design','box']]) },
      { title: 'AI & Infrastructure', icon: MP.cpu, items: mk([['AI Solutions','robot'],['Cloud Solutions','cloud'],['Automation','gear'],['Web Hosting','db'],['Consulting','bulb']]) }
    ];
    return {
      megaCols: MEGA,
      ftCols: [
        { title: 'Quick Links', links: [['Home','Main.dc.html'],['About Us','About.dc.html'],['Careers','Careers.dc.html'],['Contact Us','#']] },
        { title: 'Services', links: [['Web Development','#'],['Mobile Apps','#'],['Digital Marketing','#'],['SEO Services','#'],['Branding & Design','#'],['AI Solutions','#'],['SaaS Development','#'],['Cloud Solutions','#'],['Desktop Software','#'],['Web Hosting','#']] },
        { title: 'Sectors', links: [['Healthcare','#'],['Education','#'],['Retail & Ecommerce','#'],['Logistics','#'],['Real Estate','#'],['Hospitality','#'],['Startups','#'],['Travel & Tourism','#']] }
      ].map(function (c) { return { title: c.title, links: c.links.map(function (l) { return { label: l[0], href: c.title === 'Services' ? '/services?service=' + encodeURIComponent(l[0]) : l[1] }; }) }; }),
      nav: navItems.map(function (n) {
        var active = n[0] === (window.location.pathname === '/contact' ? 'Contact us' : 'Services');
        return { svc: n[0] === 'Services', plain: n[0] !== 'Services' && n[0] !== 'Sectors', sec: n[0] === 'Sectors', label: n[0], href: n[1], style: active ? 'color: #1E3A8A; border-bottom: 2px solid #1E3A8A; padding-bottom: 3px' : 'color: #334155' };
      }),
      stats: [
        { icon: I.rocket, value: '[000]+', label: 'Projects Delivered' },
        { icon: I.users, value: '[00]+', label: 'Happy Clients' },
        { icon: I.star, value: '[00]+', label: 'Years Experience' },
        { icon: I.globe, value: '[00]+', label: 'Countries Served' }
      ],
      pillars: [
        { cls: 'mvv-card', num: '01', icon: I.target, title: 'Our Mission', text: 'To help every business harness AI and modern technology to work smarter, serve customers better and grow faster.', points: ['AI-first, practical solutions', 'Results you can measure'], delay: 'animation-delay: 0s' },
        { cls: 'mvv-card mvv-dark', num: '02', icon: I.eye, title: 'Our Vision', text: 'To be the most trusted technology partner for businesses building their digital future.', points: ['A long-term partner, not a vendor', 'Global standards, local care'], delay: 'animation-delay: -1.3s' },
        { cls: 'mvv-card', num: '03', icon: I.heart, title: 'Our Values', text: 'Integrity, craftsmanship, transparency and a genuine commitment to our clients’ success.', points: ['Honest, open communication', 'Craftsmanship in every detail'], delay: 'animation-delay: -2.6s' }
      ],
      journey: [
        { cls: 'zj-item zj-up', year: '[Year]', title: 'Founded', text: 'AlbeTech starts with a small team and a big idea.', icon: I.flag },
        { cls: 'zj-item zj-down', year: '[Year]', title: 'First Major Product', text: 'Our first enterprise platform goes live.', icon: I.code },
        { cls: 'zj-item zj-up', year: '[Year]', title: 'Going Global', text: 'Serving clients across multiple countries.', icon: I.globe },
        { cls: 'zj-item zj-down', year: '[Year]', title: 'AI Division', text: 'Dedicated AI & machine learning team launched.', icon: I.cpu },
        { cls: 'zj-item zj-up zj-now', year: 'Today', title: 'Where We Are', text: '15 business divisions and still growing.', icon: I.rocket }
      ],
      team: team.map(function (t, k) { return { name: t[0], role: t[1], cls: k === 0 ? 'tm-card tm-feat' : 'tm-card', pos: 'background-image: url(/design/' + t[2] + '); background-size: cover; background-position: center top' }; }),
      reasons: [
        { icon: I.users, title: 'Dedicated Expert Teams', text: 'Senior specialists assigned to your project from day one.' },
        { icon: I.shield, title: 'Secure by Design', text: 'Security and data privacy built into every layer.' },
        { icon: I.clock, title: 'On-Time Delivery', text: 'Agile sprints, clear milestones and honest timelines.' },
        { icon: I.chart, title: 'Measurable Results', text: 'We track outcomes that matter to your business.' }
      ]
    };
}

const SERVICE_OPTS = ['Digital Marketing', 'Web Development', 'Mobile App', 'AI Solutions', 'Graphic Design', 'SEO / SEM', 'SaaS / Software', 'Cloud Solutions', 'Branding'];
const BUDGETS = ['₹10K – 20K', '₹20K – 40K', '₹40K – 80K', '₹80K – 1L', '₹1L & above', "Let's discuss"];
// menu / footer service name -> checkbox that should be pre-selected on arrival
const SERVICE_MAP = {
  'Web Development': 'Web Development', 'Mobile App Development': 'Mobile App', 'Mobile Apps': 'Mobile App',
  'SaaS Development': 'SaaS / Software', 'Enterprise Software': 'SaaS / Software', 'Desktop Software': 'SaaS / Software',
  'Ecommerce Solutions': 'Web Development', 'Digital Marketing': 'Digital Marketing', 'Social Media Marketing': 'Digital Marketing',
  'SEO Services': 'SEO / SEM', 'Video Production': 'Branding', 'Branding & Identity': 'Branding', 'Branding & Design': 'Branding',
  'Brochure Design': 'Graphic Design', 'Poster Design': 'Graphic Design', 'Logo Design': 'Graphic Design', 'Product Cover Design': 'Graphic Design',
  'AI Solutions': 'AI Solutions', 'Automation': 'AI Solutions', 'Cloud Solutions': 'Cloud Solutions', 'Web Hosting': 'Cloud Solutions',
};
import albeLogo from '../assets/images/albe.svg';
const ORBIT = [
  ['M8 6l-6 6 6 6M16 6l6 6-6 6', -90],
  ['M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM11 18h2', -30],
  ['M6 6h12v12H6zM9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4', 30],
  ['M7 18a5 5 0 1 1 .9-9.9A6 6 0 0 1 19 10a4 4 0 0 1 0 8z', 90],
  ['M4 20l4-1 11-11-3-3L5 16zM14 6l3 3', 150],
  ['M4 20V10M10 20V4M16 20v-7M22 20H2', 210],
];
const SOCIALS = [
  ['X', <path d="M4 4l16 16M20 4L4 20" />],
  ['Facebook', <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />],
  ['Instagram', <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></>],
  ['LinkedIn', <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 0 1 5 0v3" /></>],
  ['Threads', <path d="M17.5 9.5C16.8 6.2 14.8 4.5 12 4.5c-3.6 0-6 2.7-6 7.5s2.4 7.5 6 7.5c3 0 5-1.6 5-4 0-2.2-1.8-3.2-4-3.2-1.7 0-3 .8-3 2.1 0 1.1.9 1.8 2.1 1.8 2 0 3-1.5 3-4.2 0-.6 0-1.2-.1-1.6" />],
];
const ico = (d, size = 16) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

function Component() {
  const [state, setState] = React.useState({});
  const v = renderVals(state, setState);
  const { search } = useLocation();
  const [form, setForm] = React.useState({ name: '', phone: '', email: '', company: '', message: '', budget: '', services: [] });
  const [sent, setSent] = React.useState(false);

  React.useEffect(() => {
    const picked = SERVICE_MAP[new URLSearchParams(search).get('service')];
    setForm((f) => ({ ...f, services: picked ? [picked] : [] }));
    setSent(false);
  }, [search]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggle = (s) => setForm((f) => ({ ...f, services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s] }));
  const submit = (e) => {
    e.preventDefault();
    const body = [
      'Name: ' + form.name, 'Phone: ' + form.phone, 'Email: ' + form.email, 'Company: ' + form.company,
      'Services: ' + (form.services.join(', ') || '-'), 'Budget: ' + (form.budget || '-'), '', form.message,
    ].join('\n');
    window.location.href = 'mailto:info@albetech.in?subject=' + encodeURIComponent('Project enquiry from ' + form.name) + '&body=' + encodeURIComponent(body);
    setSent(true);
  };

  const contacts = [
    { label: 'Phone', icon: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z',
      lines: [<a href="tel:+917994163062">+91 7994163062</a>], muted: 'Mon – Fri · 9:00 AM – 6:00 PM IST' },
    { label: 'Email', icon: 'M3 5h18v14H3zM3 6l9 7 9-7', lines: [<a href="mailto:info@albetech.in">info@albetech.in</a>], muted: 'Replies typically within 4 hours' },
    { label: 'Office', icon: 'M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
      lines: ['Dot Space, Kuravankonam,', 'Market Road, Trivandrum,', 'Kerala, India'] },
    { label: 'WhatsApp', icon: 'M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z',
      lines: [<a href="https://wa.me/917994163062" target="_blank" rel="noreferrer">Chat on WhatsApp →</a>], muted: 'Quick replies for project enquiries' },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS + SV_CSS }} />
      <div style={{"fontFamily":"'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif","color":"#0F172A","background":"#F5F7FC","fontSize":"15px","lineHeight":"1.6"}}><div className="tb"><div className="tb-in"><div className="tb-left"><A href="mailto:info@albetech.in"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 5h18v14H3zM3 6l9 7 9-7" /></svg>info@albetech.in</A><A href="tel:+917994163062"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>+91 7994163062</A><span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>Trivandrum, Kerala</span></div><div className="tb-soc"><A href="#" className="soc-ic" aria-label="X" style={{"backgroundPosition":"-0px 0px"}}></A><A href="#" className="soc-ic" aria-label="Facebook" style={{"backgroundPosition":"-26px 0px"}}></A><A href="#" className="soc-ic" aria-label="Instagram" style={{"backgroundPosition":"-52px 0px"}}></A><A href="#" className="soc-ic" aria-label="LinkedIn" style={{"backgroundPosition":"-78px 0px"}}></A><A href="#" className="soc-ic" aria-label="Threads" style={{"backgroundImage":"none","backgroundColor":"#E3E8F3","display":"flex","alignItems":"center","justifyContent":"center","color":"#3A3F4B"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.5 9.5C16.8 6.2 14.8 4.5 12 4.5c-3.6 0-6 2.7-6 7.5s2.4 7.5 6 7.5c3 0 5-1.6 5-4 0-2.2-1.8-3.2-4-3.2-1.7 0-3 .8-3 2.1 0 1.1.9 1.8 2.1 1.8 2 0 3-1.5 3-4.2 0-.6 0-1.2-.1-1.6" /></svg></A></div></div></div><header id="top" className="hd"><div className="hd-in"><A href="/" className="hd-logo"><img src="/design/7f85574cf359f9b3e032c71d9b54de30.png" alt="albetech" width="122" height="30" /></A><button type="button" className="hd-burger" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button><nav aria-label="Main" className="hd-nav">{(v.nav).map((n, _in) => (<React.Fragment key={_in}>{(n.plain) ? (<><A href={n.href} className="hd-link" style={S(n.style)}>{n.label}{(n.chev) ? (<><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{"marginLeft":"3px"}}><path d="M6 9l6 6 6-6" /></svg></>) : null}</A></>) : null}{(n.svc) ? (<><div className="svc"><button type="button" className="svc-btn" aria-haspopup="true">{n.label}{" "}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button><div className="mega"><div style={{"background":"#FFFFFF","border":"1px solid #E2E8F5","borderRadius":"16px","boxShadow":"0 24px 60px rgba(11,30,91,.18)","padding":"22px 22px 18px","display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(230px, 1fr))","gap":"10px 28px"}}>{(v.megaCols).map((col, _icol) => (<React.Fragment key={_icol}><div><div style={{"display":"flex","alignItems":"center","gap":"6px","fontSize":"12px","fontWeight":"700","letterSpacing":".06em","color":"#2F5BEA","textTransform":"uppercase","padding":"0 4px 10px","marginBottom":"8px","borderBottom":"1px solid #E2E8F5"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={col.icon} /></svg>{col.title}</div><div style={{"display":"flex","flexDirection":"column","gap":"2px"}}>{(col.items).map((it, _iit) => (<React.Fragment key={_iit}><A href={"/services?service=" + encodeURIComponent(it.label)} className="mega-item"><span className="mega-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={it.icon} /></svg></span>{it.label}</A></React.Fragment>))}</div></div></React.Fragment>))}</div></div></div></>) : null}{(n.sec) ? (<><div className="svc"><button type="button" className="svc-btn" aria-haspopup="true">{n.label}{" "}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button><div className="mega"><div style={{"background":"#FFFFFF","border":"1px solid #E2E8F5","borderRadius":"16px","boxShadow":"0 24px 60px rgba(11,30,91,.18)","padding":"22px 22px 18px","display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(230px, 1fr))","gap":"10px 28px"}}>{([{"title":"Health & Learning","icon":"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z","items":[{"label":"Healthcare","icon":"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"},{"label":"Education","icon":"M22 10L12 5 2 10l10 5 10-5zM6 12v5c3 3 9 3 12 0v-5"}]},{"title":"Commerce & Operations","icon":"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0","items":[{"label":"Retail & Ecommerce","icon":"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"},{"label":"Logistics","icon":"M1 3h15v13H1zM16 8h4l3 3v5h-7zM8 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM21 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"},{"label":"Real Estate","icon":"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10"}]},{"title":"Lifestyle & Growth","icon":"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z","items":[{"label":"Hospitality","icon":"M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"},{"label":"Startups","icon":"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"},{"label":"Travel & Tourism","icon":"M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]}]).map((col, _icol) => (<React.Fragment key={_icol}><div><div style={{"display":"flex","alignItems":"center","gap":"6px","fontSize":"12px","fontWeight":"700","letterSpacing":".06em","color":"#2F5BEA","textTransform":"uppercase","padding":"0 4px 10px","marginBottom":"8px","borderBottom":"1px solid #E2E8F5"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={col.icon} /></svg>{col.title}</div><div style={{"display":"flex","flexDirection":"column","gap":"2px"}}>{(col.items).map((it, _iit) => (<React.Fragment key={_iit}><A href={"/services?service=" + encodeURIComponent(it.label)} className="mega-item"><span className="mega-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={it.icon} /></svg></span>{it.label}</A></React.Fragment>))}</div></div></React.Fragment>))}</div></div></div></>) : null}</React.Fragment>))}</nav><div className="hd-cta"><A href="tel:+917994163062" className="hd-call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>Call now</A></div></div></header>
      <section className="sv-hero">
        <div className="sv-wrap sv-hero-in">
          <div>
            <div className="sv-bc"><A href="/">Home</A>{ico(<path d="M9 6l6 6-6 6" />, 12)}<span>Services</span></div>
            <span className="sv-pill">{ico(<path d="M12 3v4M12 17v4M3 12h4M17 12h4" />, 12)}Our Services</span>
            <h1 className="sv-h1"><span>Smart Solutions Built</span><br />Around Your Business</h1>
            <p className="sv-lead">From websites and mobile apps to AI, cloud and brand design — albetech’s specialist teams plan, build and support technology that helps your business grow faster.</p>
            <span className="sv-free"><span className="sv-pill-dot" />Free consultation for every new project</span>
          </div>
          <div className="sv-orbit" aria-hidden="true">
            <div className="sv-ring r1" /><div className="sv-ring r3" /><div className="sv-ring r2" />
            {ORBIT.map(([d, deg], i) => (
              <div key={i} className="sv-node" style={{ left: 50 + 50 * Math.cos((deg * Math.PI) / 180) + '%', top: 50 + 50 * Math.sin((deg * Math.PI) / 180) + '%', animationDelay: i * 0.6 + 's' }}>{ico(<path d={d} />, 17)}</div>
            ))}
            <div className="sv-core">
              <img src={albeLogo} alt="" width="84" height="84" />
            </div>
          </div>
        </div>
      </section>

      <section className="sv-body" id="contact">
        <div className="sv-wrap sv-grid">
          <div>
            <h2 className="sv-title">Contact <span>Details</span></h2>
            <p className="sv-sub">Visit us in Trivandrum or reach us digitally — we’re available across all channels.</p>
            <div className="sv-cards">
              {contacts.map((c) => (
                <div className="sv-cc" key={c.label}>
                  <span className="sv-cc-ic">{ico(<path d={c.icon} />)}</span>
                  <div>
                    <div className="sv-cc-lb">{c.label}</div>
                    <div className="sv-cc-tx">{c.lines.map((l, i) => <div key={i}>{l}</div>)}</div>
                    {c.muted ? <div className="sv-cc-mu">{c.muted}</div> : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="sv-follow">Follow us</div>
            <div className="sv-soc">
              {SOCIALS.map(([label, d]) => <a key={label} href="#" aria-label={label}>{ico(d, 16)}</a>)}
            </div>
          </div>

          <form className="sv-form" onSubmit={submit}>
            <h2>Send Us a Message</h2>
            <p className="sv-sub" style={{ marginBottom: 0 }}>Tell us about your project — we’ll reply with a tailored proposal.</p>
            <div className="sv-row sv-f">
              <div><label className="sv-lb" htmlFor="sv-name">Full name *</label><input id="sv-name" className="sv-in" required placeholder="Your name" value={form.name} onChange={set('name')} /></div>
              <div><label className="sv-lb" htmlFor="sv-phone">Phone number *</label><input id="sv-phone" className="sv-in" required type="tel" placeholder="+91" value={form.phone} onChange={set('phone')} /></div>
            </div>
            <div className="sv-f"><label className="sv-lb" htmlFor="sv-email">Email address *</label><input id="sv-email" className="sv-in" required type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} /></div>
            <div className="sv-f"><label className="sv-lb" htmlFor="sv-co">Company / Organisation</label><input id="sv-co" className="sv-in" placeholder="Your company name" value={form.company} onChange={set('company')} /></div>
            <div className="sv-f">
              <span className="sv-lb">Services required</span>
              <div className="sv-opts">
                {SERVICE_OPTS.map((s) => (
                  <label key={s} className={'sv-opt' + (form.services.includes(s) ? ' on' : '')}>
                    <input type="checkbox" checked={form.services.includes(s)} onChange={() => toggle(s)} />{s}
                  </label>
                ))}
              </div>
            </div>
            <div className="sv-f">
              <span className="sv-lb">Estimated budget (INR)</span>
              <div className="sv-opts">
                {BUDGETS.map((b) => (
                  <label key={b} className={'sv-opt chip' + (form.budget === b ? ' on' : '')}>
                    <input type="radio" name="budget" checked={form.budget === b} onChange={() => setForm((f) => ({ ...f, budget: b }))} />{b}
                  </label>
                ))}
              </div>
            </div>
            <div className="sv-f"><label className="sv-lb" htmlFor="sv-msg">Message / Project brief</label><textarea id="sv-msg" className="sv-in" placeholder="Briefly describe your project, goals, or timeline..." value={form.message} onChange={set('message')} /></div>
            <button type="submit" className="sv-btn">{ico(<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />, 15)}Send Message</button>
            {sent ? <div className="sv-ok" role="status">Thanks! Your email app should open with the enquiry ready to send to info@albetech.in.</div> : null}
          </form>
        </div>
      </section>
      <section className="sv-loc">
        <div className="sv-wrap" style={{ paddingTop: 26 }}>
          <div className="sv-kicker">Find us</div>
          <h2 className="sv-loc-h">Our Office <span>Location</span></h2>
          <p className="sv-addr">{ico(<><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" /><circle cx="12" cy="10" r="2.4" /></>, 13)}Dot Space, Kuravankonam, Market Road, Trivandrum, Kerala</p>
          <div className="sv-map">
            <svg className="sv-map-art" viewBox="0 0 800 216" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="800" height="216" fill="#EDF0F8" />
              <rect x="355" y="26" width="90" height="62" rx="8" fill="#E1E6F1" />
              <rect x="570" y="20" width="82" height="62" rx="8" fill="#E1E6F1" />
              <rect x="480" y="135" width="105" height="55" rx="8" fill="#E1E6F1" />
              <circle cx="158" cy="160" r="26" fill="#D3EBDD" />
              <circle cx="298" cy="188" r="17" fill="#D3EBDD" />
              <circle cx="620" cy="170" r="20" fill="#D3EBDD" />
              <path d="M0 150 Q30 135 70 140 Q110 150 112 216 L0 216z" fill="#A9D4EE" />
              <path d="M0 140 Q50 120 100 135 Q135 150 138 216" fill="none" stroke="#C7E3F5" strokeWidth="10" />
              <path d="M120 216 Q330 120 800 118" fill="none" stroke="#fff" strokeWidth="9" />
              <path d="M0 52 Q380 40 800 56" fill="none" stroke="#fff" strokeWidth="5" />
              <path d="M0 52 Q380 40 800 56" fill="none" stroke="#A8B7DB" strokeWidth="3" strokeDasharray="0" opacity=".7" />
              <path d="M380 0 Q430 100 460 216" fill="none" stroke="#fff" strokeWidth="5" />
              <path d="M270 0 Q290 100 300 216" fill="none" stroke="#A8B7DB" strokeWidth="4" />
              <path d="M455 118 Q540 130 625 216" fill="none" stroke="#A8B7DB" strokeWidth="3" />
              <path d="M520 0 Q560 90 560 216" fill="none" stroke="#fff" strokeWidth="4" />
              <g fontFamily="inherit" fontSize="8" fontWeight="700" fill="#5E6B8C" letterSpacing=".4">
                <text x="26" y="127" fill="#4D9CCB" fontSize="7.5">ARABIAN SEA</text>
                <text x="305" y="172">PATTOM</text>
                <text x="520" y="93">SREEKARYAM</text>
                <text x="482" y="206">KURAVANKONAM</text>
                <text x="198" y="26">PATTAM</text>
              </g>
              <circle cx="460" cy="128" r="21" fill="#C3CEF5" opacity=".85" />
              <path d="M460 98c-8.6 0-15.5 6.7-15.5 15.2 0 10.2 12 20.4 14.2 22.2.8.6 1.8.6 2.6 0 2.2-1.8 14.2-12 14.2-22.2C475.5 104.700 468.600 98 460 98z" fill="#1E40AF" />
              <circle cx="460" cy="112" r="5.200" fill="#fff" />
              <rect x="476" y="108" width="54" height="16" rx="8" fill="#fff" />
              <text x="489" y="119" fontSize="8.500" fontWeight="800" fill="#0B1E5B">albetech</text>
            </svg>
            <div className="sv-map-card">
              <b>albetech</b>
              <p>Dot Space, Kuravankonam, Market Road, Trivandrum, Kerala, India</p>
              <div className="sv-map-btns">
                <a className="sv-map-open" href="https://www.google.com/maps/search/?api=1&query=Dot+Space+Kuravankonam+Market+Road+Trivandrum+Kerala" target="_blank" rel="noreferrer">{ico(<path d="M14 3h7v7M21 3l-9 9M18 14v6H4V6h6" />, 12)}Open in Maps</a>
                <a className="sv-map-dir" href="https://www.google.com/maps/dir/?api=1&destination=Dot+Space+Kuravankonam+Market+Road+Trivandrum+Kerala" target="_blank" rel="noreferrer" aria-label="Get directions">{ico(<path d="M3 11l19-9-9 19-2-8z" />, 13)}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sv-cta">
        <div className="sv-kicker">Ready to start?</div>
        <h2>Your Next Big Idea Starts with a <span>Conversation</span></h2>
        <p>Call us, WhatsApp us, or drop an email — our team responds within 4 business hours.</p>
        <div className="sv-cta-btns">
          <a className="sv-cta-a" href="tel:+917994163062">{ico(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />, 14)}+91 7994163062</a>
          <a className="sv-cta-b" href="https://wa.me/917994163062" target="_blank" rel="noreferrer">{ico(<path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z" />, 14)}WhatsApp Us</a>
        </div>
      </section>
      <footer className="ft"><div aria-hidden="true" className="ft-glow ft-glow1"></div><div aria-hidden="true" className="ft-glow ft-glow2"></div><div className="ft-wrap"><div className="ft-cta"><div aria-hidden="true" className="ft-cta-ring ft-cta-ring1"></div><div aria-hidden="true" className="ft-cta-ring ft-cta-ring2"></div><div aria-hidden="true" className="ft-cta-dots"></div><div className="ft-cta-text"><span className="ft-cta-eyebrow"><span className="ft-live"></span>Available for new projects</span><h2 className="ft-cta-title">Have a project in mind?<br />Let’s build it together.</h2></div><div className="ft-cta-actions"><A href="#" className="ft-cta-btn">{"Start Your Project "}<span aria-hidden="true">→</span></A><A href="tel:+917994163062" className="ft-cta-ghost"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>+91 7994163062</A></div></div><div className="ft-grid"><div className="ft-brand"><A href="/" className="ft-logo"><img src="/design/7f85574cf359f9b3e032c71d9b54de30.png" alt="albetech" width="146" height="36" /></A><p className="ft-about">India’s leading enterprise technology and digital transformation company, based in Trivandrum, Kerala. Delivering AI-era solutions worldwide since 2020.</p><div className="ft-contact"><A href="#" className="ft-ci"><span className="ft-ci-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg></span><span>Dot Space, Kuravankonam,<br />Market Road.</span></A><A href="tel:+917994163062" className="ft-ci"><span className="ft-ci-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg></span><span>+91 7994163062</span></A><A href="mailto:info@albetech.com" className="ft-ci"><span className="ft-ci-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 5h18v14H3zM3 6l9 7 9-7" /></svg></span><span>info@albetech.com</span></A></div><div className="ft-social"><A href="#" className="soc-ft" aria-label="X" style={{"backgroundPosition":"-0px -32.7px"}}></A><A href="#" className="soc-ft" aria-label="Facebook" style={{"backgroundPosition":"-34px -32.7px"}}></A><A href="#" className="soc-ft" aria-label="Instagram" style={{"backgroundPosition":"-68px -32.7px"}}></A><A href="#" className="soc-ft" aria-label="LinkedIn" style={{"backgroundPosition":"-102px -32.7px"}}></A><A href="#" className="soc-ft" aria-label="YouTube" style={{"backgroundPosition":"-136px -32.7px"}}></A><A href="#" className="soc-ft" aria-label="Behance" style={{"backgroundPosition":"-170px -32.7px"}}></A></div></div>{(v.ftCols).map((col, _icol) => (<React.Fragment key={_icol}><div><div className="ft-h">{col.title}</div><div className="ft-links">{(col.links).map((l, _il) => (<React.Fragment key={_il}><A href={l.href} className="ft-link"><span className="ft-dash" aria-hidden="true"></span>{l.label}</A></React.Fragment>))}</div></div></React.Fragment>))}<div className="ft-news"><div className="ft-h">Stay Updated</div><p className="ft-sub">Subscribe to get the latest tech insights and company news.</p><label htmlFor="ft-email" className="ft-sr">Email address</label><div className="ft-input"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 5h18v14H3zM3 6l9 7 9-7" /></svg><input id="ft-email" type="email" placeholder="Your email address" /></div><button type="button" className="ft-btn">{"Subscribe "}<span aria-hidden="true">→</span></button><div className="ft-h" style={{"marginTop":"28px"}}>Based At</div><span className="ft-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 21V5l8-3v19M12 9h8v12M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2M2 21h20" /></svg>Trivandrum, Kerala</span></div></div><div className="ft-bottom"><span>{"© 2026 Albetech. All rights reserved. "}<span className="ft-made">{"Crafted in Trivandrum "}<span className="ft-heart" aria-hidden="true">♥</span></span></span><span className="ft-legal"><A href="#">Privacy Policy</A><span aria-hidden="true">·</span><A href="#">Terms of Service</A><span aria-hidden="true">·</span><A href="#">Sitemap</A><A href="#top" className="ft-top" aria-label="Back to top"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg></A></span></div></div><div aria-hidden="true" className="ft-watermark">albetech</div></footer></div>
    </>
  );
}

Component.pageTitle = "AlbeTech — Services";
Component.fonts = ["https://fonts.googleapis.com","https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"];

export default Component;
