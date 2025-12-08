# ARTE Showcase: Demonstrating the Reproducible Article Template


This repository contains a **practical demonstration** of [ARTE (Article Reproducibility Template \& Environment)](https://github.com/phdpablo/article-template), a template for creating dynamic and fully reproducible scientific articles.

## 📖 About

ARTE is a conceptual proposal for reproducible articles presented in three sequential editorials published in the *Brazilian Administration Review (BAR)*:

1. **First Act** - [Foundations, Practice, and Implementation](https://doi.org/10.1590/1807-7692bar2025250079): Presents the foundations of Open Science (OS), the reproducibility crisis, and five operational steps for OS adoption.
2. **Second Act** - [Tools and Workflows](https://doi.org/10.1590/1807-7692bar2025250116): Maps the technological arsenal for reproducible research, including version control (Git), dependency management (renv), environment control (Docker), and reproducible documents (Quarto).
3. **Third Act** - [Implementation with ARTE](https://doi.org/10.1590/1807-7692bar2025250162): Presents the ARTE workflow as an integrated solution that operationalizes Act 1 principles using Act 2 technologies.

## 🎯 Purpose of This Repository

This repository serves as a **showcase** for the ARTE template, demonstrating:

- How to structure a research project following the [TIER Protocol 4.0](https://www.projecttier.org/tier-protocol/protocol-4-0/)
- How to integrate data analysis, code, and narrative in dynamic documents using Quarto
- How to ensure reproducibility at different levels: minimal, adequate, and complete
- How to publish scientific articles openly and transparently


## 🔗 Related Sites and Repositories

| Type | Description | Link |
| :-- | :-- | :-- |
| **Main Template** | ARTE repository with complete structure | [github.com/phdpablo/article-template](https://github.com/phdpablo/article-template) |
| **Template Deployment** | Complete documentation and demonstration | [phdpablo.github.io/article-template](https://phdpablo.github.io/article-template/) |
| **This Showcase** | Demonstration repository | [github.com/phdpablo/arte-showcase](https://github.com/phdpablo/arte-showcase) |
| **Showcase Deployment** | Site with practical example | [phdpablo.github.io/arte-showcase](https://phdpablo.github.io/arte-showcase/) |

## 📚 Reproducibility Spectrum

ARTE offers three adoption levels, allowing researchers to start gradually:

### Level 1: Minimal Reproducibility

**For beginners**

- Project organization with TIER Protocol
- Materials sharing via OSF
- **Tools:** Folder structure, README documentation


### Level 2: Adequate Reproducibility

**For those already using version control**

- Rigorous tracking with Git/GitHub
- Dependency management (renv)
- Publishing via GitHub Pages
- **Tools:** Git, GitHub, renv, Quarto


### Level 3: Complete Reproducibility

**The gold standard**

- Full containerization with Docker
- Computational environment encapsulation
- Guarantee of identical execution on any machine
- **Tools:** Docker, Git, GitHub, renv, Quarto


## 🛠️ Technologies Used

- **[Quarto](https://quarto.org/)**: Scientific publishing system for dynamic documents
- **[RStudio](https://posit.co/)**: Integrated IDE as workflow hub
- **[Git/GitHub](https://github.com/)**: Version control and collaboration
- **[Docker](https://www.docker.com/)**: Computational environment containerization
- **[renv](https://rstudio.github.io/renv/)**: R package management
- **[TIER Protocol 4.0](https://www.projecttier.org/)**: Community standard for project organization


## 🚀 How to Use

### Step 1: Explore the Deploy Online

Visit [https://phdpablo.github.io/article-template/](https://phdpablo.github.io/article-template/) to see the template in action without installing anything.

### Step 2: Use the ARTE Template

1. Access the [template repository](https://github.com/phdpablo/article-template)
2. Click "Use this template" to create your own project
3. Follow the detailed implementation instructions in README

### Step 3: Containerize

1. Use this template in your daily work with Docker.
2. Use the template at the end of the project to share your article.


## 📖 Additional Resources

### Complementary Course

For practical deepening, we recommend the course:

**Future-Proof Article: Open Science Journey in Practice**
🔗 [phdpablo.github.io/curso-open-science](https://phdpablo.github.io/curso-open-science)

The course offers:

- Tool installation and configuration videos
- Step-by-step tutorials
- Continuously evolving material
- Continuous enrollment and open access


### Complete Documentation

- [ARTE Implementation Guide](https://github.com/phdpablo/article-template)
- [Folder Structure](https://phdpablo.github.io/article-template/01-intro.html)
- [Visual Roadmap](https://phdpablo.github.io/article-template/02-background.html)


## 📄 Citation

If you use ARTE in your research, please cite the founding editorials:

**Third Act (Implementation):**

Rogers, P., & Limongi, R. (2025). Open Science in Three Acts: Foundations, Practice, and Implementation - Third Act. BAR - Brazilian Administration Review, 22(3),e250162. [https://doi.org/10.1590/1807-7692bar2025250162](https://doi.org/10.1590/1807-7692bar2025250162)

```bibtex
@article{rogers2025,
  title = {Open Science in Three Acts: Foundations, Practice, and Implementation - Third Act},
  author = {Rogers, Pablo and Limongi, Ricardo},
  year = {2025},
  journal = {BAR - Brazilian Administration Review},
  volume = {22},
  number = {3},
  pages = {e250162},
  doi = {10.1590/1807-7692bar2025250162}
}
```

**Second Act (Tools):**

Limongi, R., & Rogers, P. (2025). Open Science in Three Acts: Foundations, Practice, and Implementation - Second Act. BAR - Brazilian Administration Review, 22(2), e250116. [https://doi.org/10.1590/1807-7692bar2025250116](https://doi.org/10.1590/1807-7692bar2025250116)

```bibtex
@article{limongi2025b,
  title = {Open Science in Three Acts: Foundations, Practice, and Implementation - Second Act},
  author = {Limongi, Ricardo and Rogers, Pablo},
  year = {2025},
  journal = {BAR - Brazilian Administration Review},
  volume = {22},
  number = {2},
  pages = {e250116},
  doi = {10.1590/1807-7692bar2025250116}
}
```

**First Act (Foundations):**

Limongi, R., & Rogers, P. (2025). Open Science in Three Acts: Foundations, Practice, and Implementation - First Act. BAR - Brazilian Administration Review, 22(1), e250079. [https://doi.org/10.1590/1807-7692bar2025250079](https://doi.org/10.1590/1807-7692bar2025250079)

```bibtex
@article{limongi2025a,
  title = {Open Science in Three Acts: Foundations, Practice, and Implementation - First Act},
  author = {Limongi, Ricardo and Rogers, Pablo},
  year = {2025},
  journal = {BAR - Brazilian Administration Review},
  volume = {22},
  number = {1},
  pages = {e250079},
  doi = {10.1590/1807-7692bar2025250079}
}
```


## 🏗️ ARTE Architecture

ARTE integrates dedicated tools and community standards to meet the five pillars of computational reproducibility:

```
📁 ARTE minimum folders
├── 📂 Data/               # Data repository (TIER Protocol)
│   ├── InputData/         # Raw data (immutable)
│   └── AnalysisData/      # Processed data
├── 📂 Scripts/            # Analysis code
│   ├── ProcessingScripts/ # Transform orginal data
│   └── AnalysisScripts/   # Generate results
├── 📂 Output/             # Results outputs (disposable)
├── 📄 *.qmd               # Quarto dynamic documents
├── 📄 _quarto.yml         # Project configuration
├── 📄 references.bib      # References (Zotero integration)
└── 🐳 docker/             # Containerized environment
```


## 🌟 Key Features

### Gradual Adoption

ARTE's central innovation is structuring a reproducibility spectrum that transforms adopting good practices from a binary choice into an incremental development journey. Researchers can start at the minimal level without technical expertise and advance to higher rigor levels as competencies and confidence increase.

### Pedagogical Contribution

ARTE works as a structured bridge between accessible philosophy of practice and training new scientists. It addresses friction points in traditional workflows:

- **Initial setup complexity**: Pre-configured structure ready to use
- **Inconsistency between projects**: Standardized TIER Protocol organization
- **Disconnect between analysis and writing**: Quarto dynamic documents
- **Learning curve**: Scalable approach from minimal to complete reproducibility


### Usage Scenarios

- **Solo researcher**: Environment consistency over time
- **Team research**: Eliminates "works on my machine" problems
- **End-use encapsulation**: Develop locally, containerize for final submission
- **Hybrid use**: Containerize critical analyses while using host tools for editing


## 🤝 Contributing

This showcase is part of a larger effort to promote Open Science in Applied Social Sciences. Suggestions, improvements, and contributions are welcome!

## 📧 Contact

**Pablo Rogers**
Universidade Federal de Uberlândia
📧 pablorogers@ufu.br

**Ricardo Limongi**
Universidade Federal de Goiás
📧 ricardolimongi@ufg.br

## 📜 License

This project is licensed under [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/).

***

**"The play is over, but the practice is just beginning."**
*— Conclusion of the Third Act*

***

## 🤖 AI Usage Declaration

**Human Authorship:** This documentation was conceptualized, structured, and curated by Pablo Rogers. All content decisions, scientific accuracy, and final responsibility remain entirely human.

**AI Tools Used:**
- **Claude 4.5 Sonnet (Anthropic)**: Text structuring, translation (Portuguese to English), and markdown formatting (Documentation)
- **Research Visualization Module (Google Labs)**: Visual showcase elements (Three Editorials ARTE Site)

**Verification:** All AI-generated content was reviewed for accuracy and cross-referenced with the three BAR editorials and the main ARTE template repository.

**Guidelines Followed:** This declaration follows the transparency principles outlined in "[Guidelines for Ethical and Responsible Use of Generative AI](https://prpg.unicamp.br/wp-content/uploads/sites/10/2025/01/livro-diretrizes-ia-1.pdf)" (Sampaio et al., 2024).

