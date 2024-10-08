export default function getBadgeColor(category: string): string {
    const colorSelector: { [key: string]: string} = {
        "TECHNOLOGY": "orange",
        "SPORTS": "green",
        "PROGRAMMING": "purple",
        "OPINION": "blue",
        "default": "gray"
    }
    return colorSelector[category] || colorSelector['default'];
}