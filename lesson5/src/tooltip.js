export default function initTooltips() {

    let tooltips = document.querySelectorAll('.tooltip-item');

    tooltips.forEach(item => {

        item.style.display = 'none';

        let parent = item.parentNode;

        parent.addEventListener('mouseover', () => {
            item.style.display = 'block';
        });

        parent.addEventListener('mouseout', () => {
            item.style.display = 'none';
        });
    });
}
