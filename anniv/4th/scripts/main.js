document.getElementById('download').addEventListener('click', function() {
    var fileURL = "cursor_file/krystallos.zip"; // 替换为你的文件路径
    var fileName = 'Krystallos.zip'; // 替换为下载时显示的文件名

    var link = document.createElement('a');
    link.href = fileURL;
    link.download = fileName;

    // 模拟点击事件来触发下载
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});