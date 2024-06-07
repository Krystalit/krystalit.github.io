let nt = document.getElementById("note");

if (!localStorage.getItem("sedNote")) {
	saveNote();
  } else {

	sdNote = localStorage.getItem("sedNote");
	nt.textContent = sdNote;

}

function saveNote() {

	let sdNote = nt.textContent;
	localStorage.setItem("sedNote", sdNote);
	nt.placeholder = sdNote;
    alert("CONTENT SAVED");
  }
