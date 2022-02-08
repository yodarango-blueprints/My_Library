// call this function "onLoad" event on an image and passed the target image being loaded.
// for a full reference see: https://github.com/yodarango/kidzquest/blob/master/frontend/src/components/layers%26wrappers/form.js
// ------- Line 76

const compressImage= (img_target) => {
    /* when the image loads get tjhe src data and paint it on canvas */
    const scaleSize = 400 / e.target.width
    canvas.current.width = 400
    canvas.current.height = e.target.height * scaleSize

    const ctx = canvas.current.getContext('2d')
    ctx.drawImage(e.target, 0, 0, canvas.current.width, canvas.current.height)

    /* convert the compressed canvas to base64 */
    const srcEncoded = ctx.canvas.toDataURL(e.target, 'image/jpg')
    const before = (originalSize.length * 0.75) / 1024 /*get the original size of the image in KB*/
    const after = (srcEncoded.length * 0.75) / 1024 /*get the compressed size of the image in KB*/

    /* save the compressed size to mongodb */
    setcompressedImage(srcEncoded)
    console.log(`original= ${before} vs compressed${after}`)
  }