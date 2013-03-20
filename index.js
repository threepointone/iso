function transform(pxlen, height, x, y, z, offset) {
    // convert a point from 
    // isometric x, y, z space to 
    // top, left, zIndex
    offset = offset || {}

    pxlen = pxlen || 24;
    height = height || 33;

    x = x || 0;
    y = y || 0;
    z = z || 0;

    return {
        left: ((offset.left || 0) + ((x - y) * pxlen)) + 'px',
        top: ((offset.top || 0 ) - (((x + y) * 0.6 * pxlen) + (z * height))) + 'px',
        zIndex: Math.round(1000 + (1000 * z) - ((x + y))) + ''
    }
}

var faceMap = {
    front: {
        rotateZ: '-30deg',
        skewX: '-30deg',
        skewY: '0deg',
        translateX: '0px',
        translateY: '0px',
        scaleY:'1'
    },
    left: {
        rotateZ: '30deg',
        skewX: '30deg',
        skewY: '0deg',
        translateX: '-30px',
        translateY: '14.2px',
        scaleY:'1'
    },
    top: {
        rotateZ: '-30deg',
        skewX: '30deg',
        skewY: '0deg',
        translateX: '16px',
        translateY: '-28px',
        scaleY:'0.88'
    }
};

function face(type) {
    return faceMap[type];
}

module.exports = {
    transform: transform,
    face: face
};