const dropArea = document.querySelector('.drop-area');
const dragText = dropArea.querySelector('h2');
const button = dropArea.querySelector('button');
const input = dropArea.querySelector('#input-file');
let files;

button.addEventListener('click', (e) => {
    e.preventDefault();
    input.click();
})

input.addEventListener('change', (e) => {
    files = input.files;
    dropArea.classList.add('active');
    showFiles(files);
    dropArea.classList.remove('active');
});


dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.remove('active');
    dragText.textContent = 'suelta para subir los archivos';
});

dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropArea.classList.remove('active');
    dragText.textContent = 'Arrastra y suelta imagenes';

});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files)
    dropArea.classList.remove('active');
    dragText.textContent = 'Arrastra y suelta imagenes';
});

function showFiles(files) {
    if (files.length == undefined) {
        processFile(files);
    } else {
        for (const file of files) {
            processFile(file);
        }
    }
}

function processFile(file) {
    const docType = file.type;
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']

    if (validExtensions.includes(docType)) {
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;

        fileReader.addEventListener('load', e => {
            const fileUrl = fileReader.result;
            const image = `
                <div id="${id}" class="file-container">
                    <img src="${fileUrl}" alt="${file.name}"  width='40px'>
                    <div class="status">
                        <span>${file.name}</span>
                        <span class="success">Archivo subido correctamente...</span>
                    </div>
                    <hr>
                </div>

            `;

            const html = document.querySelector('#preview').innerHTML;
            document.querySelector('#preview').innerHTML = image + html;
        });

        fileReader.readAsDataURL(file);
        uploadfile(file, id);
    } else {
        alert('no es un archivo valido');
    }
}

function uploadfile(file, id) {}