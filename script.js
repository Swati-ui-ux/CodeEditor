// let ht = document.querySelector('.html-editor textarea');
// let cs = document.querySelector('.css-editor textarea')
// let js = document.querySelector('.js-editor textarea')
// let save = document.querySelector('.save')
// let full = document.querySelector('#full')
// let outputContainer = document.querySelector('.output-container')
// let copy = document.querySelectorAll('.copy')
// full.addEventListener('click', () => {
//     outputContainer.classList.toggle('output-full-active')
//     if (outputContainer.classList.contains('output-full-active')) {
//         full.style.transform ='rotate(180deg)'
//     } else {
//        full.style.transform ='rotate(0deg)'
//     }
// })
// let out = document.querySelector('#output')
// save.addEventListener('click', () => {
// // alert('Hello')
//     out.contentDocument.body.innerHTML = ht.value
//     out.contentDocument.head.innerHTML = `<style>${cs.value}</style>`
//     out.contentWindow.eval(js.value)

// })

// copy.forEach((e) => {
//     e.addEventListener('click', () => {
//         if (e.classList.contains('copy1')) {
//         navigator.clipboard.writeText(ht.value)
//         } else if (e.classList.contains('copy2')) {
//         navigator.clipboard.writeText(cs.value)
//         } else {
//         navigator.clipboard.writeText('js.value')
//         }
//     })

// })

let ht = document.querySelector("#html-input");
let cs = document.querySelector("#css-input");
let js = document.querySelector("#js-input");
let save = document.querySelector(".save");
let full = document.querySelector("#full");
let outputContainer = document.querySelector(".output-container");
let copy = document.querySelectorAll(".copy");
let out = document.querySelector("#output");

full.addEventListener("click", () => {
  outputContainer.classList.toggle("output-full-active");
  full.style.transform = outputContainer.classList.contains(
    "output-full-active"
  )
    ? "rotate(180deg)"
    : "rotate(0deg)";
});

save.addEventListener("click", () => {
  const html = ht.value;
  const cssCode = `<style>${cs.value}</style>`;
  const jsCode = `<script>${js.value}<\/script>`;
  out.srcdoc = `${html}\n${cssCode}\n${jsCode}`;
});

copy.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("copy1")) {
      navigator.clipboard.writeText(ht.value);
    } else if (e.classList.contains("copy2")) {
      navigator.clipboard.writeText(cs.value);
    } else if (e.classList.contains("copy3")) {
      navigator.clipboard.writeText(js.value);
    }
  });
});
