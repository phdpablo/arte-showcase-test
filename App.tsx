/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { NetworkBackground, StructureBackground } from './components/QuantumScene';
import { WorkflowInfinityDiagram, ArteFolderStructure, ReproducibilitySpectrum } from './components/Diagrams';
import { ArrowDown, Menu, X, BookOpen, GitBranch, Box, Anchor } from 'lucide-react';

const AuthorCard = ({ name, role, institution, delay }: { name: string, role: string, institution: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-xs hover:border-bar-gold/50" style={{ animationDelay: delay }}>
      <h3 className="font-serif text-2xl text-bar-blue text-center mb-2">{name}</h3>
      <div className="w-12 h-0.5 bg-bar-gold mb-4 opacity-60"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center mb-1">{role}</p>
      <p className="text-xs text-stone-400 text-center leading-relaxed italic">{institution}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-bar-blue selection:bg-bar-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-bar-blue rounded flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm">B</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity text-bar-blue`}>
              BAR <span className="font-normal text-stone-500 text-sm">Review</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#foundations" onClick={scrollToSection('foundations')} className="hover:text-bar-gold transition-colors cursor-pointer uppercase">Act I: Foundations</a>
            <a href="#tools" onClick={scrollToSection('tools')} className="hover:text-bar-gold transition-colors cursor-pointer uppercase">Act II: Tools</a>
            <a href="#arte" onClick={scrollToSection('arte')} className="hover:text-bar-gold transition-colors cursor-pointer uppercase">Act III: ARTE</a>
            <a 
              href="https://github.com/phdpablo/article-template" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2 bg-bar-blue text-white rounded hover:bg-bar-gold transition-colors shadow-sm cursor-pointer"
            >
              Get Template
            </a>
          </div>

          <button className="md:hidden text-bar-blue p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#foundations" onClick={scrollToSection('foundations')} className="hover:text-bar-blue transition-colors cursor-pointer uppercase">Act I: Foundations</a>
            <a href="#tools" onClick={scrollToSection('tools')} className="hover:text-bar-blue transition-colors cursor-pointer uppercase">Act II: Tools</a>
            <a href="#arte" onClick={scrollToSection('arte')} className="hover:text-bar-blue transition-colors cursor-pointer uppercase">Act III: ARTE</a>
            <a 
              href="https://github.com/phdpablo/article-template" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setMenuOpen(false)} 
              className="px-6 py-3 bg-bar-blue text-white rounded shadow-lg cursor-pointer"
            >
              Get Template
            </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <NetworkBackground />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 border border-bar-gold text-bar-gold text-xs tracking-[0.2em] uppercase font-bold rounded backdrop-blur-sm bg-white/30">
            BAR • Braz. Adm. Rev. • 2025
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8 text-bar-blue drop-shadow-sm">
            Open Science <br/><span className="italic font-normal text-bar-gold text-3xl md:text-5xl block mt-4">In Three Acts</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
            Foundations, Practice, and Implementation.<br/>A journey to transform academic research into a transparent, reproducible, and collaborative ecosystem.
          </p>
          
          <div className="flex justify-center gap-4">
             <a href="#foundations" onClick={scrollToSection('foundations')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-bar-blue transition-colors cursor-pointer">
                <span>BEGIN THE JOURNEY</span>
                <span className="p-2 border border-stone-300 rounded-full group-hover:border-bar-blue transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* ACT I: Foundations */}
        <section id="foundations" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-bar-green uppercase">Act I</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-bar-blue">The Foundations</h2>
              <div className="w-16 h-1 bg-bar-gold mb-6"></div>
              <p className="text-stone-500 text-sm italic">
                "How can confidence in scientific results be restored? Perhaps a consensus has been adopted for Open Science practices."
              </p>
            </div>
            <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed space-y-8">
              <p>
                <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-bar-gold">C</span>ontemporary science faces a profound challenge: the <strong>reproducibility crisis</strong>. More than two-thirds of researchers have tried and failed to reproduce other scientists' experiments. This crisis catalyzes a movement towards Open Science (OS).
              </p>
              <p>
                We call on the scientific community to recognize OS as the foundation for new researchers. We propose five operational steps to guide graduate programs and advisors:
              </p>
              <ul className="space-y-4 mt-6 border-l-2 border-bar-green/30 pl-6">
                <li className="flex items-start gap-3">
                    <span className="font-serif font-bold text-bar-gold text-xl">1.</span>
                    <span><strong>Transparent Planning:</strong> Pre-registration of hypotheses and methods to prevent bias.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="font-serif font-bold text-bar-gold text-xl">2.</span>
                    <span><strong>Data & Code Sharing:</strong> Making raw materials accessible (FAIR principles).</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="font-serif font-bold text-bar-gold text-xl">3.</span>
                    <span><strong>Open Access:</strong> Democratizing knowledge beyond paywalls.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="font-serif font-bold text-bar-gold text-xl">4.</span>
                    <span><strong>Open Collaboration:</strong> Engaging citizen science and inter-institutional networks.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="font-serif font-bold text-bar-gold text-xl">5.</span>
                    <span><strong>Ethics & Integrity:</strong> Balancing openness with privacy and responsibility.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ACT II: The Tools */}
        <section id="tools" className="py-24 bg-[#F5F4F0] border-t border-stone-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-bar-green uppercase">Act II</div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-4 text-bar-blue">The Practice</h2>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Moving from philosophy to the workbench. A set of tools that form a local workflow hub connected to a remote ecosystem.
                    </p>
                </div>

                <WorkflowInfinityDiagram />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
                        <div className="w-12 h-12 bg-stone-100 rounded flex items-center justify-center text-bar-blue mb-4"><GitBranch /></div>
                        <h3 className="font-serif text-xl mb-2 text-bar-blue">Version Control</h3>
                        <p className="text-sm text-stone-600">
                            <strong>Git</strong> tracks every change, allowing you to travel back in time and collaborate without fear of overwriting work.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
                        <div className="w-12 h-12 bg-stone-100 rounded flex items-center justify-center text-bar-green mb-4"><BookOpen /></div>
                        <h3 className="font-serif text-xl mb-2 text-bar-blue">Dynamic Documents</h3>
                        <p className="text-sm text-stone-600">
                            <strong>Quarto</strong> integrates narrative and code. Figures are generated directly from data, eliminating copy-paste errors.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
                        <div className="w-12 h-12 bg-stone-100 rounded flex items-center justify-center text-bar-gold mb-4"><Box /></div>
                        <h3 className="font-serif text-xl mb-2 text-bar-blue">Encapsulation</h3>
                        <p className="text-sm text-stone-600">
                            <strong>Docker</strong> freezes the entire computational environment (OS, libraries), solving the "it works on my machine" problem.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* ACT III: ARTE */}
        <section id="arte" className="py-24 bg-bar-blue text-stone-100 overflow-hidden relative">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <StructureBackground />
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                     <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-bar-green text-bar-blue text-xs font-bold tracking-widest uppercase rounded mb-6 border border-bar-green/50">
                            <Anchor size={14}/> Act III: Implementation
                        </div>
                        <h2 className="font-serif text-4xl md:text-6xl mb-6 text-white">ARTE</h2>
                        <h3 className="text-xl text-bar-gold mb-6 font-serif italic">Article Reproducibility Template & Environment</h3>
                        <p className="text-lg text-stone-300 mb-6 leading-relaxed">
                            Possessing the tools is not enough; we need a structure. <strong>ARTE</strong> is a cohesive template that operationalizes the principles of Open Science. 
                        </p>
                        <p className="text-lg text-stone-300 leading-relaxed">
                            It integrates the TIER protocol for folder organization, Quarto for writing, Git for versioning, and Docker for encapsulation into a single, ready-to-use repository.
                        </p>
                     </div>
                     <div>
                        <ArteFolderStructure />
                     </div>
                </div>

                <div className="mt-24">
                     <h2 className="font-serif text-3xl text-center mb-12 text-white">A Scalable Journey</h2>
                     <ReproducibilitySpectrum />
                </div>
            </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-serif text-4xl md:text-5xl mb-8 text-bar-blue">A Path of No Return</h2>
                <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                    "The play is over, but the practice is just beginning."<br/>
                    By adopting ARTE, you are not just organizing files; you are building a more trustworthy, collaborative, and beneficial future for science.
                </p>
                <a 
                    href="https://github.com/phdpablo/article-template" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-bar-gold text-white text-lg font-medium rounded hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl"
                >
                    <GitBranch size={20} />
                    Clone the Template on GitHub
                </a>
            </div>
        </section>

        {/* Authors */}
        <section className="py-24 bg-[#F5F4F0] border-t border-stone-300">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-bar-green uppercase">The Authors</div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-4 text-bar-blue">Editorial Team</h2>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    <AuthorCard 
                        name="Ricardo Limongi" 
                        role="Editor-in-Chief" 
                        institution="Universidade Federal de Goiás (UFG)"
                        delay="0s" 
                    />
                    <AuthorCard 
                        name="Pablo Rogers" 
                        role="Corresponding Author" 
                        institution="Universidade Federal de Uberlândia (UFU)"
                        delay="0.1s" 
                    />
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-bar-blue text-stone-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2">Open Science</div>
                <p className="text-sm text-bar-green">Foundations, Practice, and Implementation.</p>
            </div>
            <div className="text-sm">
                <a href="https://doi.org/10.1590/1807-7692bar2025250162" className="hover:text-bar-gold transition-colors">DOI: 10.1590/1807-7692bar2025250162</a>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600">
            Based on the editorial series published in BAR - Brazilian Administration Review (2025).
        </div>
      </footer>
    </div>
  );
};

export default App;