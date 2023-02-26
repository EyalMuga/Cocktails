// Change IMG_DATA dictionary such that for each animal it will contain a list of images.
// Now, when the user searches for the animal, and it exists in your IMG_DATA, you should display a
//  more complex component. You should display the first image in the list, and under the image you should display an
//  option to navigate between images of the same animal, like this:
// Clicking on the arrows should display the image with the relevant index in
//  the list. Note, when you cannot navigate left or right because you are at the firs
// t / last image, the button should be disabled. In addition, if you only have one image in the list
// - no buttons should be displayed at all!

export const IMG_DATA = {
cat: [
    "https://hips.hearstapps.com/hmg-prod/images/cat-quotes-1563551892.jpg?crop=0.668xw:1.00xh;0.243xw,0&resize=980:*",
    ],
dog: [
    "https://cdn-6212c8e2c1ac198840e9c663.closte.com/wp-content/uploads/2023/02/koa-tomkings-puppies-1.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
    "https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_4x3.jpg",
    "https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head.jpg",
],
panda: [
    "https://www.daytondailynews.com/resizer/3r5j3rbmSG9jxOYA-nNoj4nhIEA=/814x458/cloudfront-us-east-1.images.arcpublishing.com/coxohio/PHH5LQ5HROV6AGQCR3B5ASG2NM.jpg",
],
monkey: ["https://mcdn.wallpapersafari.com/medium/82/15/pXhUb7.jpg"],
giraffe: [
    "https://assets.nrdc.org/sites/default/files/styles/full_content--retina/public/media-uploads/9905972176_058687136b_o.jpg",
],
notfound: [
    "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png",
],
};
