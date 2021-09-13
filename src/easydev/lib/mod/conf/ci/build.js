const Build = (function() {

    let init = () => {
        console.log('init2');
    };

    let build = () => {
        console.log('build2');
    };

    return {
        init : init,
        build : build
    };
}());