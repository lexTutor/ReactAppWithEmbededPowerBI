import handleRefresh from "./TokenLifeTime";

const RefreshToken = async(token, reportId) => {
    // Get the token expiration from the access token
    var tokenExpiration = handleRefresh(token);

    // Set an interval to check the access token expiration, and update if needed

    if (!tokenExpiration) {
        console.log("Updating report access token");
        return await getNewUserAccessToken(reportId);
    }

    //Implemet call to graph
    function getNewUserAccessToken(reportId) {
        return "newaccesstoken";
    }
};

export default RefreshToken;