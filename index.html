<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Student Record Manager</title>
  <style>
    /* Simple, clean UI styles */
    :root {
      --accent: #2563eb;
      --bg: #f7f9fc;
      --card: #ffffff;
      --muted: #6b7280;
      --danger: #ef4444;
    }
    body {
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      margin: 0;
      padding: 24px;
      background: linear-gradient(180deg, var(--bg), #eef2ff);
      color: #0f172a;
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    header {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:16px;
      margin-bottom:20px;
    }
    h1 { margin:0; font-size:20px; }
    p.lead { margin:0; color:var(--muted); font-size:14px; }

    .grid {
      display:grid;
      grid-template-columns: 360px 1fr;
      gap: 18px;
      align-items:start;
    }
    .card {
      background: var(--card);
      border-radius: 10px;
      padding:16px;
      box-shadow: 0 6px 18px rgba(15,23,42,0.06);
    }
    label { display:block; font-size:13px; margin-bottom:6px; color:var(--muted); }
    input[type="text"], input[type="number"], select {
      width:100%;
      padding:10px 12px;
      border-radius:8px;
      border:1px solid #e6edf3;
      margin-bottom:12px;
      font-size:14px;
    }
    button {
      background:var(--accent);
      color:white;
      border:0;
      padding:10px 14px;
      border-radius:8px;
      cursor:pointer;
      font-weight:600;
    }
    button.ghost{
      background:transparent; color:var(--accent); border:1px solid rgba(37,99,235,0.12);
    }
    table {
      width:100%;
      border-collapse: collapse;
      font-size:14px;
    }
    th, td {
      text-align:left;
      padding:10px 8px;
      border-bottom:1px solid #f1f5f9;
    }
    th { color:var(--muted); font-weight:600; font-size:13px; }
    .actions button { margin-right:6px; }
    .empty { color:var(--muted); padding:18px; text-align:center; }

    .small { font-size:13px; color:var(--muted); }

    /* modal-ish update form */
    .overlay {
      position:fixed;
      inset:0;
      background:rgba(2,6,23,0.45);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:20px;
      display:none;
    }
    .modal {
      width:420px;
      max-width:100%;
    }

    .msg {
      margin-bottom:12px;
      padding:8px 10px;
      border-radius:8px;
      background:#ecfeff;
      color:#065f46;
      display:none;
    }

    .danger {
      background: #fff1f2;
      color: #7f1d1d;
    }

    @media (max-width:880px){
      .grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div>
        <h1>Student Record Manager</h1>
        <p class="lead">Create, view, update and delete student records. Tested with Express + MongoDB API.</p>
      </div>
      <div class="small">Base API: <span id="baseUrlSpan">/students</span></div>
    </header>

    <div class="grid">
      <!-- Left: Add Student -->
      <div class="card">
        <h3 style="margin-top:0">Add New Student</h3>
        <div id="msg" class="msg"></div>

        <form id="addForm">
          <label for="name">Name <span style="color:var(--danger)">*</span></label>
          <input id="name" name="name" type="text" placeholder="John Doe" required />

          <label for="course">Course <span style="color:var(--danger)">*</span></label>
          <input id="course" name="course" type="text" placeholder="B.Tech (CSE)" required />

          <label for="age">Age</label>
          <input id="age" name="age" type="number" placeholder="20" min="0" />

          <label for="city">City</label>
          <input id="city" name="city" type="text" placeholder="Raipur" />

          <div style="display:flex;gap:8px;align-items:center">
            <button type="submit">Add Student</button>
            <button id="refreshBtn" type="button" class="ghost">Refresh List</button>
          </div>
        </form>

        <p class="small" style="margin-top:14px">Note: Name and Course are required.</p>
      </div>

      <!-- Right: Students List -->
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <h3 style="margin-top:0">Students</h3>
          <div class="small">Total: <span id="totalCount">0</span></div>
        </div>

        <div id="tableWrap">
          <table id="studentsTable" aria-live="polite">
            <thead>
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Age</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="studentsBody">
              <tr><td colspan="5" class="empty">Loading...</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Update modal -->
  <div id="overlay" class="overlay">
    <div class="card modal">
      <h3 style="margin-top:0">Update Student</h3>
      <form id="updateForm">
        <input id="updId" type="hidden" />
        <label for="updName">Name <span style="color:var(--danger)">*</span></label>
        <input id="updName" name="name" type="text" required />
        <label for="updCourse">Course <span style="color:var(--danger)">*</span></label>
        <input id="updCourse" name="course" type="text" required />
        <label for="updAge">Age</label>
        <input id="updAge" name="age" type="number" min="0" />
        <label for="updCity">City</label>
        <input id="updCity" name="city" type="text" />

        <div style="display:flex;gap:8px;margin-top:10px">
          <button type="submit">Save</button>
          <button id="cancelUpdate" type="button" class="ghost">Cancel</button>
        </div>
      </form>
    </div>
  </div>

<script>
/*
  index.html frontend script
  - Configure `BASE_URL` to point to your API base (default '/students' for same origin)
  - Requires backend endpoints:
      GET    /students
      POST   /students
      PUT    /students/:id
      DELETE /students/:id

  Note: If you host frontend on a different origin, enable CORS on your backend.
*/

// ----------------- Configuration -----------------
const BASE_URL = '/students'; // change this if your API is on different path or host, e.g. 'http://localhost:5000/students'
document.getElementById('baseUrlSpan').textContent = BASE_URL;

// ----------------- Helpers -----------------
const qs = (sel) => document.querySelector(sel);
const $ = (id) => document.getElementById(id);

// Show message
function showMsg(text, isError = false) {
  const el = $('#msg');
  el.textContent = text;
  el.style.display = 'block';
  el.classList.toggle('danger', isError);
  setTimeout(() => { el.style.display = 'none'; }, 3500);
}

// Format empty cell
function emptyRow(text) {
  return `<tr><td colspan="5" class="empty">${text}</td></tr>`;
}

// ----------------- Fetch / API helpers -----------------
async function apiFetch(path = '', options = {}) {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  // Try parse JSON or throw
  const contentType = res.headers.get('content-type') || '';
  const body = contentType.includes('application/json') ? await res.json() : null;
  if (!res.ok) {
    const err = (body && body.message) ? body.message : `HTTP ${res.status}`;
    throw new Error(err);
  }
  return body;
}

// ----------------- Render students -----------------
async function loadStudents() {
  const tbody = $('#studentsBody');
  $('#totalCount').textContent = '—';
  try {
    tbody.innerHTML = emptyRow('Loading...');
    const students = await apiFetch(BASE_URL, { method: 'GET' });
    if (!students || students.length === 0) {
      tbody.innerHTML = emptyRow('No students found. Add one!');
      $('#totalCount').textContent = '0';
      return;
    }
    $('#totalCount').textContent = String(students.length);
    tbody.innerHTML = students.map(s => `
      <tr data-id="${s._id}">
        <td>${escapeHtml(s.name || '')}</td>
        <td>${escapeHtml(s.course || '')}</td>
        <td>${s.age ?? ''}</td>
        <td>${escapeHtml(s.city || '')}</td>
        <td class="actions">
          <button class="ghost" onclick="onEdit('${s._id}')">Edit</button>
          <button style="background:#ef4444" onclick="onDelete('${s._id}')">Delete</button>
        </td>
      </tr>
    `).join('');
  } catch (err) {
    tbody.innerHTML = emptyRow('Failed to load. See console.');
    console.error('loadStudents error', err);
    showMsg('Error loading students: ' + err.message, true);
  }
}

// basic XSS escape for insertion
function escapeHtml(str) {
  return String(str)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#39;');
}

// ----------------- Add student -----------------
$('#addForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = $('#name').value.trim();
  const course = $('#course').value.trim();
  const age = $('#age').value ? Number($('#age').value) : undefined;
  const city = $('#city').value.trim();

  if (!name || !course) {
    showMsg('Name and Course required', true);
    return;
  }

  try {
    const payload = { name, course };
    if (age !== undefined) payload.age = age;
    if (city) payload.city = city;

    await apiFetch(BASE_URL, { method: 'POST', body: JSON.stringify(payload) });
    showMsg('Student added');
    $('#addForm').reset();
    await loadStudents();
  } catch (err) {
    console.error('add error', err);
    showMsg('Add failed: ' + err.message, true);
  }
});

// ----------------- Edit / Update -----------------
window.onEdit = async function(id) {
  try {
    // get the student (we could fetch all or find in DOM; fetch single is safer)
    const student = await apiFetch(`${BASE_URL}/${id}`, { method: 'GET' }).catch(()=>null);
    // If backend doesn't support GET /students/:id, fallback to scanning table:
    if (!student) {
      const row = document.querySelector(`tr[data-id="${id}"]`);
      if (!row) { showMsg('Student not found', true); return; }
      const cells = row.querySelectorAll('td');
      $('#updId').value = id;
      $('#updName').value = cells[0].textContent.trim();
      $('#updCourse').value = cells[1].textContent.trim();
      $('#updAge').value = cells[2].textContent.trim();
      $('#updCity').value = cells[3].textContent.trim();
    } else {
      $('#updId').value = student._id;
      $('#updName').value = student.name || '';
      $('#updCourse').value = student.course || '';
      $('#updAge').value = student.age ?? '';
      $('#updCity').value = student.city || '';
    }

    // show modal
    $('#overlay').style.display = 'flex';
  } catch (err) {
    console.error('onEdit', err);
    showMsg('Error preparing update: ' + err.message, true);
  }
};

$('#cancelUpdate').addEventListener('click', () => {
  $('#overlay').style.display = 'none';
});

$('#updateForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = $('#updId').value;
  const name = $('#updName').value.trim();
  const course = $('#updCourse').value.trim();
  const age = $('#updAge').value ? Number($('#updAge').value) : undefined;
  const city = $('#updCity').value.trim();

  if (!name || !course) {
    showMsg('Name and Course required', true);
    return;
  }

  try {
    const payload = { name, course };
    if (age !== undefined) payload.age = age;
    if (city) payload.city = city;

    await apiFetch(`${BASE_URL}/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
    showMsg('Student updated');
    $('#overlay').style.display = 'none';
    await loadStudents();
  } catch (err) {
    console.error('update error', err);
    showMsg('Update failed: ' + err.message, true);
  }
});

// ----------------- Delete -----------------
window.onDelete = async function(id) {
  if (!confirm('Delete this student?')) return;
  try {
    await apiFetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    showMsg('Student deleted');
    await loadStudents();
  } catch (err) {
    console.error('delete error', err);
    showMsg('Delete failed: ' + err.message, true);
  }
};

// ----------------- Refresh & init -----------------
$('#refreshBtn').addEventListener('click', loadStudents);

// initialize
(async function init() {
  // optional: check if BASE_URL is reachable
  await loadStudents();
})();
</script>
</body>
</html>
