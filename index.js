const getFirstResolvableComponent = (pathsToTry) => {
    for(const pathToTry of pathsToTry) {
        try{
            return require.resolve(pathToTry);
        } catch(e) {}
    }
    // None of the given template paths could be resolved.
    throw new Error(`No component passed to getFirstResolvableComponent could be found! Tried: ${pathsToTry}`)
}

module.exports = { getFirstResolvableComponent }
