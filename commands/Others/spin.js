const Canvas = require("canvas"),
  GIFEncoder = require("gif-encoder-2");
module.exports = {
  name: "spin",
  description: 'weeeeeeeeeeeeeeeeeeeeeeeeeeee',
  usage: "-spin [@user]",
  async execute(client, message, args) {

    const user = message.mentions.users.first() || message.author;
    let image = await Canvas.loadImage(user.displayAvatarURL({ dynamic: false, format: "png", size: 1024 }));
    const width = 512,
      height = 512,
      numAngles = 50;
    const canvas = Canvas.createCanvas(width, height);

    const ctx = canvas.getContext("2d");
    let msg = await message.channel.send("okay, now loading...")
    ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
    ctx.clip();

    const encoder = new GIFEncoder(width, width);
    encoder.setTransparent(0x402814);

    encoder.start();
    encoder.setRepeat(0);
    encoder.setDelay(15);

    const centerX = width / 2;
    const centerY = height / 2;

    ctx.drawImage(image, 0, 0, width, height);

    for (let i = 0; i <= numAngles; i++) {
      encoder.addFrame(ctx);

      ctx.translate(centerX, centerY);

      ctx.rotate((Math.PI * 2) / numAngles);

      ctx.translate(-centerX, -centerY);

      const imageData = ctx.getImageData(0, 0, width, width);

      for (let j = 0; j < imageData.data.length; j += 4) {
        imageData.data[j] = 64;
        imageData.data[j + 1] = 40;
        imageData.data[j + 2] = 20;
        imageData.data[j + 3] = 0;
      }

      ctx.putImageData(imageData, 0, 0);

      ctx.drawImage(image, 0, 0, width, height);
    }

    encoder.finish();

    return message.channel.send({
      files: [
        {
          attachment: encoder.out.getData(),
          name: "spin.gif"
        }
      ]
    }).then(msg.delete())




  }
}