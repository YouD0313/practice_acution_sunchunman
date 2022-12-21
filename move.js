const chkBox = document.querySelectorAll('.delChk');
const trAll = document.querySelectorAll('tr:not(#title)');
const moveBtn = document.querySelectorAll('.order_change > div');
const titleTh = document.querySelectorAll('th');

// 경매번호 고정
trAll.forEach((trA, idx) => {
	trA.childNodes[3].innerText = `${trA.rowIndex}`;
});

// 체크박스 클릭시 배경색변경
chkBox.forEach((chkB, idx) => {
	chkB.addEventListener('click', function () {
		let chkBool = chkBox[idx].checked;
		switch (chkBool) {
			case true:
				trAll[idx].classList.add('backColor');
				break;
			case false:
				trAll[idx].classList.remove('backColor');
				break;
		}
	});
});

/**
 * 이동버튼클릭
 */
// 맨위 클릭시
moveBtn[0].addEventListener('click', function () {
	chkBox.forEach((chkB, idx) => {
		let chkBool = chkBox[idx].checked;
		if (chkBool == true) {
			const moveTr = chkB.parentElement.parentElement;
			$(moveTr).closest('tbody').find('tr:first').before(moveTr);
			trAll.forEach((trA, idx) => {
				trA.childNodes[3].innerText = `${trA.rowIndex}`;
			});
		}
	});
});

// 위로 클릭시
moveBtn[1].addEventListener('click', function (e) {
	chkBox.forEach((chkB, idx) => {
		let chkBool = chkBox[idx].checked;
		if (chkBool == true) {
			const moveTr = chkB.parentElement.parentElement;
			$(moveTr).prev().before(moveTr);
			trAll.forEach((trA, idx) => {
				trA.childNodes[3].innerText = `${trA.rowIndex}`;
			});
		}
	});
});

// 아래 클릭시
moveBtn[2].addEventListener('click', function () {
	chkBox.forEach((chkB, idx) => {
		let chkBool = chkBox[idx].checked;
		if (chkBool == true) {
			const moveTr = chkB.parentElement.parentElement;
			$(moveTr).next().after(moveTr);
			trAll.forEach((trA, idx) => {
				trA.childNodes[3].innerText = `${trA.rowIndex}`;
			});
		}
	});
});

// 맨아래 클릭시
moveBtn[3].addEventListener('click', function () {
	chkBox.forEach((chkB, idx) => {
		let chkBool = chkBox[idx].checked;
		if (chkBool == true) {
			const moveTr = chkB.parentElement.parentElement;
			$(moveTr).closest('tbody').find('tr:last').after(moveTr);
			trAll.forEach((trA, idx) => {
				trA.childNodes[3].innerText = `${trA.rowIndex}`;
			});
		}
	});
});

// 삭제선택클릭시 전체선택 전체해제
let eData = 'false';
titleTh[0].addEventListener('click', function () {
	if (eData == 'false') {
		chkBox.forEach((chkB, idx) => {
			chkB.checked = true;
			trAll[idx].classList.add('backColor');
		});
		eData = 'true';
	} else if (eData == 'true') {
		chkBox.forEach((chkB, idx) => {
			chkB.checked = false;
			trAll[idx].classList.remove('backColor');
		});
		eData = 'false';
	}
});
