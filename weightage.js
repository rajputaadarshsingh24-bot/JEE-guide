document.addEventListener('DOMContentLoaded', () => {
  let activeExam = 'jee-main';
  let activeSubject = 'physics';
  let activeFilter = 'all';

  const examBtns = document.querySelectorAll('.exam-btn');
  const subjectBtns = document.querySelectorAll('.subject-btn');
  const chipBtns = document.querySelectorAll('.chip');
  const searchInput = document.getElementById('chapterSearch');

  // Switch Exam Tab (JEE Main vs Advanced)
  examBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      examBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeExam = btn.getAttribute('data-exam');
      updateActiveSection();
    });
  });

  // Switch Subject Tab (Physics, Chemistry, Maths)
  subjectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      subjectBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSubject = btn.getAttribute('data-subject');
      updateActiveSection();
    });
  });

  // Filter Chips (All, Class 11, Class 12, High Priority)
  chipBtns.forEach(chip => {
    chip.addEventListener('click', () => {
      chipBtns.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.getAttribute('data-filter');
      applyFilters();
    });
  });

  // Search Bar Filter
  searchInput.addEventListener('input', () => {
    applyFilters();
  });

  // Update visible section based on Exam and Subject
  function updateActiveSection() {
    const targetId = `${activeExam}-${activeSubject}`;
    const sections = document.querySelectorAll('.weightage-section');
    
    sections.forEach(sec => {
      if (sec.id === targetId) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });

    applyFilters();
  }

  // Filter Table Rows
  function applyFilters() {
    const activeSection = document.querySelector('.weightage-section.active');
    if (!activeSection) return;

    const query = searchInput.value.toLowerCase().trim();
    const rows = activeSection.querySelectorAll('.data-table tbody tr');

    rows.forEach(row => {
      const chapterName = row.children[0].textContent.toLowerCase();
      const rowClass = row.getAttribute('data-class'); // 'class11' or 'class12'
      const rowPriority = row.getAttribute('data-priority'); // 'very-high', 'high', etc.

      let matchesSearch = chapterName.includes(query);
      let matchesChip = true;

      if (activeFilter === 'class11') {
        matchesChip = (rowClass === 'class11');
      } else if (activeFilter === 'class12') {
        matchesChip = (rowClass === 'class12');
      } else if (activeFilter === 'high-priority') {
        matchesChip = (rowPriority === 'very-high' || rowPriority === 'high');
      }

      if (matchesSearch && matchesChip) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }
});