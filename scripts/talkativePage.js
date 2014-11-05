function loadContactPage() {
	if (!document.getElementById('contactUs')) {
		document.getElementById('content').innerHTML = "<div id='contactUs'><p>So, who wants to talk to people?</p><p>Creator of the patch: Joel Rechtman <a href=\"mailto:apollo326@comcast.net?subject=A Knight's Path\">apollo326@comcast.net</a></p><p>Creator of the site: Alexander Lyons <a href=\"mailto:pyroticblaziken@gmail.com?subject=A Knight's Path\">pyroticblaziken@gmail.com</a></p></div>";
	}
}
function loadDownloadPage() {
	if (!document.getElementById('downloadPage')) {
		document.getElementById('content').innerHTML = "<div id='downloadPage'><p>We don't have a download right now, because somebody (read as Joel) broke the sprites and what not.<p><p>The real reason for the lack of a download link is because we want to have the patch more stable and more complete before we release it to the wild.<p></div>";
	}
}