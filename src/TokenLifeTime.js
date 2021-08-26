const handleRefresh = (token) => {
    let tokenPayload = JSON.parse(atob(token.split(".")[1]));
    const expiration = new Date(tokenPayload.exp);
    const now = new Date();
    const oneMinute = 1000 * 60 * 1;

    if (expiration.getTime() < now.getTime() - oneMinute) {
        return false;
    } else {
        return true;
    }
};

export default handleRefresh;