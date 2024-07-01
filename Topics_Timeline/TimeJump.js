document.getElementById('selectPage').addEventListener('change', function(e){
    var dropdown = document.getElementById('selectPage');
    window.location.href = '#' + dropdown.options[dropdown.selectedIndex].getAttribute('id');
});