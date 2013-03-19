function transform(pxlen, height, x, y, z) {
    // convert a point from 
    // isometric x, y, z space to 
    // top, left, zIndex


    pxlen = pxlen || 24;
    height = height || 33;

    x = x || 0;
    y = y || 0;
    z = z || 0;

    return {
        left: ((x - y) * pxlen) + 'px',
        top: (((x + y) * 0.6 * pxlen) + (z * height)) + 'px',
        zIndex: Math.round(1000 + (1000 * z) - ((x + y)))
    }
}

var faceMap = {
    front: {
        rotateZ: '-30deg',
        skewX: '-30deg',
        skewY: '0deg'
    },
    left: {
        rotateZ: '30deg',
        skewX: '30deg',
        skewY: '0deg',
        translateX: '-30px',
        translateY: '14.2px'
    },
    top: {
        rotateZ: '-30deg',
        skewX: '30deg',
        skewY: '0deg',
        translateX: '15px',
        translateY: '-30px'
    }
};

function face(type) {
    return faceMap[type];
}

module.exports = {
    transform: transform,
    face: face
};