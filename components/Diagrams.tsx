/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, FileText, Database, Code, GitBranch, Box, Globe, Server, Layout, CheckCircle, BookOpen, Layers } from 'lucide-react';

// --- FIGURE 1: INTEGRATED WORKFLOW DIAGRAM (Infinity Loop) ---
export const WorkflowInfinityDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-stone-200 my-8 w-full">
      <h3 className="font-serif text-2xl mb-2 text-bar-blue">The Integrated Workflow</h3>
      <p className="text-sm text-stone-500 mb-8 text-center max-w-xl">
        Bridging the Local Workflow Hub (creation) with the Remote Ecosystem (dissemination) through Encapsulation.
      </p>
      
      <div className="relative w-full max-w-3xl h-80 flex items-center justify-center">
         {/* Connection Line (Infinity-ish) */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 150 150 C 150 50, 450 50, 450 150 C 450 250, 150 250, 150 150" stroke="#E5E7EB" strokeWidth="4" />
                <path d="M 150 150 C 150 50, 450 50, 450 150 C 450 250, 150 250, 150 150" stroke="#0D232C" strokeWidth="2" strokeDasharray="10 10" className="animate-[dash_20s_linear_infinite]" />
            </svg>
         </div>

         {/* Left Circle: Local Hub */}
         <motion.div 
            className="absolute left-[10%] w-48 h-48 rounded-full border-4 border-bar-blue/20 bg-white flex flex-col items-center justify-center shadow-lg z-10"
            whileHover={{ scale: 1.05 }}
         >
            <span className="text-xs font-bold tracking-widest text-bar-blue uppercase mb-2">Local Hub</span>
            <div className="flex gap-3 mb-2">
                <div className="p-2 bg-stone-100 rounded text-bar-blue"><Layout size={20} /></div> {/* RStudio */}
                <div className="p-2 bg-stone-100 rounded text-bar-blue"><GitBranch size={20} /></div> {/* Git */}
            </div>
            <div className="flex gap-3">
                 <div className="p-2 bg-stone-100 rounded text-bar-blue"><FileText size={20} /></div> {/* Quarto */}
                 <div className="p-2 bg-stone-100 rounded text-bar-blue"><BookOpen size={20} /></div> {/* Zotero */}
            </div>
            <span className="absolute -bottom-8 text-sm font-serif italic text-stone-600">Development</span>
         </motion.div>

         {/* Center: Encapsulation */}
         <motion.div 
            className="absolute left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-bar-gold text-white flex flex-col items-center justify-center shadow-xl z-20 ring-4 ring-white"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
         >
            <Box size={32} className="mb-1" />
            <span className="text-xs font-bold uppercase tracking-wider">Docker</span>
            <span className="text-[10px] opacity-80">Encapsulation</span>
         </motion.div>

         {/* Right Circle: Remote Ecosystem */}
         <motion.div 
            className="absolute right-[10%] w-48 h-48 rounded-full border-4 border-bar-green/40 bg-white flex flex-col items-center justify-center shadow-lg z-10"
            whileHover={{ scale: 1.05 }}
         >
            <span className="text-xs font-bold tracking-widest text-bar-green uppercase mb-2">Remote</span>
            <div className="flex gap-4 mb-2">
                <div className="flex flex-col items-center">
                    <div className="p-2 bg-stone-100 rounded text-bar-blue mb-1"><Globe size={20} /></div> {/* GitHub */}
                    <span className="text-[8px] font-bold uppercase text-bar-blue">GitHub</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="p-2 bg-stone-100 rounded text-bar-green mb-1"><Server size={20} /></div> {/* OSF */}
                    <span className="text-[8px] font-bold uppercase text-bar-green">OSF</span>
                </div>
            </div>
            <span className="absolute -bottom-8 text-sm font-serif italic text-stone-600">Dissemination</span>
         </motion.div>
      </div>
    </div>
  );
};

// --- FIGURE 2: ARTE FOLDER STRUCTURE ---
export const ArteFolderStructure: React.FC = () => {
  const [activeFolder, setActiveFolder] = useState<string | null>('project');

  const folders = [
    { id: 'project', name: 'Project Root', icon: Folder, desc: "The main container for your research project. Keeps everything self-contained." },
    { id: 'data', name: 'Data/', icon: Database, desc: "Separated into InputData (Immutable raw files) and AnalysisData (Processed files ready for analysis)." },
    { id: 'scripts', name: 'Scripts/', icon: Code, desc: "Computational code that performs the analysis (R, Python, Julia). Numbered for execution order." },
    { id: 'output', name: 'Output/', icon: Layers, desc: "Disposable figures and tables generated by the scripts. This folder can be deleted and regenerated." },
    { id: 'doc', name: 'doc/', icon: FileText, desc: "The Quarto manuscript (.qmd), bibliography (.bib), and citation styles (.csl)." },
    { id: 'docker', name: 'docker/', icon: Box, desc: "Dockerfile and environment configuration scripts ensuring the project runs anywhere." },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start p-8 bg-[#F5F4F0] rounded-xl border border-stone-200 my-8">
      <div className="flex-1 w-full">
        <h3 className="font-serif text-xl mb-4 text-bar-blue">ARTE Folder Architecture</h3>
        <p className="text-sm text-stone-600 mb-6">
          Based on the TIER Protocol, this structure ensures that every file has a logical place. Hover to explore details.
        </p>
        
        <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-inner font-mono text-sm">
            {/* Tree View */}
            <div 
                className={`flex items-center gap-2 p-3 rounded cursor-pointer transition-all duration-200 ${activeFolder === 'project' ? 'bg-bar-gold text-white font-bold shadow-md scale-[1.02]' : 'text-bar-blue hover:bg-bar-green/20'}`}
                onMouseEnter={() => setActiveFolder('project')}
            >
                <Folder size={16} className={activeFolder === 'project' ? "text-white" : "text-bar-gold"} /> <strong>Project/</strong>
            </div>
            
            <div className="ml-6 border-l-2 border-stone-200 pl-4 space-y-2 mt-2">
                 {folders.slice(1).map(folder => (
                     <div 
                        key={folder.id}
                        className={`flex items-center gap-2 p-3 rounded cursor-pointer transition-all duration-200 ${activeFolder === folder.id ? 'bg-bar-gold text-white font-bold shadow-md scale-[1.02]' : 'text-bar-blue hover:bg-bar-green/20'}`}
                        onMouseEnter={() => setActiveFolder(folder.id)}
                     >
                        <folder.icon size={14} className={activeFolder === folder.id ? "opacity-100" : "opacity-70"} /> {folder.name}
                     </div>
                 ))}
                 <div className="flex items-center gap-2 p-3 text-stone-400 italic">
                    <FileText size={14} /> README.md
                 </div>
            </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full min-h-[300px]">
         <motion.div 
            key={activeFolder || 'default'}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl border border-stone-200 shadow-lg w-full h-full flex flex-col justify-center relative overflow-hidden"
         >
            <div className="absolute top-0 right-0 w-32 h-32 bg-bar-green/10 rounded-bl-full -mr-8 -mt-8"></div>
            
            {activeFolder ? (
                <>
                    <div className="w-14 h-14 bg-bar-blue rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                        {React.createElement(folders.find(f => f.id === activeFolder)!.icon, { size: 28 })}
                    </div>
                    <h4 className="font-serif text-2xl text-bar-blue mb-3">{folders.find(f => f.id === activeFolder)!.name}</h4>
                    <p className="text-stone-600 leading-relaxed text-base">{folders.find(f => f.id === activeFolder)!.desc}</p>
                </>
            ) : (
                <div className="text-center text-stone-400 py-8">
                    <Folder size={48} className="mx-auto mb-4 opacity-20" />
                    <p>Hover over a folder to see its purpose in the ARTE protocol.</p>
                </div>
            )}
         </motion.div>
      </div>
    </div>
  );
};

// --- FIGURE 3: REPRODUCIBILITY SPECTRUM ---
export const ReproducibilitySpectrum: React.FC = () => {
    const [level, setLevel] = useState<1 | 2 | 3>(1);
    
    const levels = {
        1: {
            title: "Level 1: Minimum",
            subtitle: "No technical expertise required",
            desc: "Focused on organization. Uses TIER protocol for folders and OSF for sharing. Ensures materials are available.",
            tools: ["OSF", "TIER Protocol", "Zotero"],
            colorClass: "bg-bar-gold",
            ringClass: "ring-bar-gold",
            textClass: "text-bar-gold"
        },
        2: {
            title: "Level 2: Adequate",
            subtitle: "Git & Dynamic Documents",
            desc: "Adds version control and dynamic reporting. Uses Git for tracking and Quarto for embedding analysis in text.",
            tools: ["OSF", "TIER", "Zotero", "Git", "GitHub", "Quarto", "R/renv"],
            colorClass: "bg-bar-gold",
            ringClass: "ring-bar-gold",
            textClass: "text-bar-gold"
        },
        3: {
            title: "Level 3: Complete",
            subtitle: "Full Containerization",
            desc: "The Gold Standard. Encapsulates the entire OS and environment in Docker. Runs identically on any machine.",
            tools: ["OSF", "TIER", "Zotero", "Git", "GitHub", "Quarto", "R/renv", "Docker"],
            colorClass: "bg-bar-gold",
            ringClass: "ring-bar-gold",
            textClass: "text-bar-gold"
        }
    };

    const current = levels[level];

    return (
        <div className="flex flex-col gap-8 p-8 bg-bar-blue text-white rounded-xl my-8 border border-stone-800 shadow-2xl">
            <div className="flex justify-between items-end border-b border-stone-700/50 pb-4">
                <div>
                    <h3 className="font-serif text-2xl text-bar-green mb-1">The Spectrum of Reproducibility</h3>
                    <p className="text-stone-300 text-sm">Choose the level of rigor appropriate for your project.</p>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
                {/* Stepper */}
                <div className="flex md:flex-col gap-4 md:w-1/4">
                    {[1, 2, 3].map((l) => (
                        <button 
                            key={l}
                            onClick={() => setLevel(l as 1|2|3)}
                            className={`flex-1 md:flex-none p-4 rounded-lg border text-left transition-all duration-300 ${level === l ? `bg-stone-800 border-transparent ring-2 ${levels[l as 1|2|3].ringClass}` : 'bg-transparent border-stone-700/50 opacity-60 hover:opacity-100'}`}
                        >
                            <span className="block text-xs font-bold uppercase tracking-wider mb-1 text-stone-500">Level {l}</span>
                            <span className={`font-serif font-bold ${level === l ? 'text-white' : 'text-stone-400'}`}>
                                {l === 1 ? "Minimum" : l === 2 ? "Adequate" : "Complete"}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-stone-900/50 rounded-xl p-6 md:p-8 border border-stone-700/50 relative overflow-hidden">
                    {/* Background Effect */}
                    <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none ${current.colorClass}`}></div>

                    <motion.div
                        key={level}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h4 className="text-3xl font-serif mb-2 text-white">{current.title}</h4>
                        <p className={`${current.textClass} font-bold mb-6 text-lg`}>{current.subtitle}</p>
                        <p className="text-stone-300 leading-relaxed mb-8 text-lg">{current.desc}</p>

                        <div className="flex flex-wrap gap-3">
                            {current.tools.map(tool => (
                                <span key={tool} className="px-4 py-1.5 bg-stone-900 border border-stone-600 rounded-full text-sm font-medium text-stone-300 flex items-center gap-2">
                                    <CheckCircle size={14} className={current.tools.includes(tool) ? current.textClass : "text-stone-600"} />
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}