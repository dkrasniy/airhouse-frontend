export function timeAgo(date) {
    const today = new Date();
    const datePosted = new Date(date)

    const seconds = Math.round((today - datePosted) / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);

    if (seconds < 10) {
        return 'just now';
    } else if (seconds < 60) {
        return `${seconds} seconds ago`;
    } else if (minutes > 60) {
        return `${hours} hour${hours === 1 ? '' : 's'} ago`
    }
    else {
        return `${minutes} minute${minutes === 1 ? '' : 's'} ago `
    }
}