
    // Theme toggle (placeholder for future implementation)
  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    console.log("Theme changed to:", newTheme);
}


    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Terminal typing animation
    const terminalText = document.querySelector('.typing-animation');
    if (terminalText) {
        setInterval(() => {
            terminalText.style.borderColor = terminalText.style.borderColor === 'transparent' ? 'var(--primary)' : 'transparent';
        }, 500);
    }

    // Form submission
    document.querySelector('.contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Show success message (in a real app, you'd send the data to a server)
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = 'Message Sent! ✓';
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                this.reset();
            }, 2000);
        }, 1000);
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });

    // Add active nav link highlighting
 window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (!header) return;

    header.style.background =
        window.scrollY > 100
            ? 'rgba(var(--header-bg), 0.98)'
            : 'rgba(var(--header-bg), 0.95)';
});

    // Skills bars animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar-fill');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width + '%';
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));
    }

    // VS Code animation
    function animateVSCode() {
        const editor = document.getElementById('vscode-editor');
        const codeLines = [
            { number: 1, code: '<span class="comment">// Building amazing web applications</span>' },
            { number: 2, code: '<span class="keyword">import</span> <span class="function">React</span> <span class="keyword">from</span> <span class="string">\'react\'</span>;' },
            { number: 3, code: '<span class="keyword">import</span> { <span class="function">useState</span>, <span class="function">useEffect</span> } <span class="keyword">from</span> <span class="string">\'react\'</span>;' },
            { number: 4, code: '' },
            { number: 5, code: '<span class="keyword">const</span> <span class="function">Portfolio</span> = () => {' },
            { number: 6, code: '  <span class="keyword">const</span> [<span class="function">skills</span>, <span class="function">setSkills</span>] = <span class="function">useState</span>([]);' },
            { number: 7, code: '  <span class="keyword">const</span> [<span class="function">projects</span>, <span class="function">setProjects</span>] = <span class="function">useState</span>([]);' },
            { number: 8, code: '' },
            { number: 9, code: '  <span class="function">useEffect</span>(() => {' },
            { number: 10, code: '    <span class="comment">// Load portfolio data</span>' },
            { number: 11, code: '    <span class="function">fetchSkills</span>().<span class="function">then</span>(<span class="function">setSkills</span>);' },
            { number: 12, code: '    <span class="function">fetchProjects</span>().<span class="function">then</span>(<span class="function">setProjects</span>);' },
            { number: 13, code: '  }, []);' },
            { number: 14, code: '' },
            { number: 15, code: '  <span class="keyword">return</span> (' },
            { number: 16, code: '    &lt;<span class="keyword">div</span> <span class="string">className</span>=<span class="string">"portfolio"</span>&gt;' },
            { number: 17, code: '      &lt;<span class="keyword">h1</span>&gt;Welcome to my Portfolio&lt;/<span class="keyword">h1</span>&gt;' },
            { number: 18, code: '    &lt;/<span class="keyword">div</span>&gt;' },
            { number: 19, code: '  );' },
            { number: 20, code: '};' },
            { number: 21, code: '' },
            { number: 22, code: '<span class="keyword">export</span> <span class="keyword">default</span> <span class="function">Portfolio</span>;<span class="vscode-cursor"></span>' }
        ];

        let currentLine = 0;

        function typeLine() {
            if (currentLine < codeLines.length) {
                const line = codeLines[currentLine];
                const lineElement = document.createElement('div');
                lineElement.className = 'vscode-line';
                lineElement.style.animationDelay = `${currentLine * 0.1}s`;
                lineElement.innerHTML = `
                    <span class="vscode-line-number">${line.number}</span>
                    <span class="vscode-code">${line.code}</span>
                `;
                editor.appendChild(lineElement);
                currentLine++;
                setTimeout(typeLine, 200);
            }
        }

        // Start animation when VS Code container is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeLine, 500);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const vscodeContainer = document.querySelector('.vscode-container');
        if (vscodeContainer) {
            observer.observe(vscodeContainer);
        }
    }

    // Initialize animations
    document.addEventListener('DOMContentLoaded', () => {
        animateSkillBars();
        animateVSCode();
    });

    document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
});
