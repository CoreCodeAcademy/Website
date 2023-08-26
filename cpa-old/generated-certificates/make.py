#!/usr/bin/env python 
import qrcode
import uuid
from PIL import Image, ImageDraw, ImageFont
import warnings
from pprint import pprint

warnings.filterwarnings('ignore')

def insert_name_cuid(img, name, cuid):
    text_y_position = 1800
    # gets the font object from the 
    # font file (TTF)
    font = ImageFont.truetype(
        './English111 Vivace BT.ttf',
        200 # change this according to your needs
    )

    # gets the dims
    image_width = img.width

    # creates a drawing canvas overlay 
    # on top of the image
    draw = ImageDraw.Draw(img)
    
    text_width, _ = draw.textsize(name, font = font)
    
    draw.text(
        (
            (image_width - text_width) / 2,
            text_y_position
        ),
        name,
        font=font,
        fill=(0,0,0)
    )

    draw.text(
        (325, 3260),
        str(cuid),
        font=ImageFont.truetype(
            "./FiraCode-Medium.ttf",
            35
        ),
        fill=(0,0,0)
    )

def get_tempelate():
    return Image.open("./temp.png", mode='r') 

list_of_names = ['Yash Thakare', 'Yash Pawar']
database = {}

for name in list_of_names:
    cuid = uuid.uuid4()

    cert = get_tempelate()
    insert_name_cuid(cert, name, cuid)

    url = f"https://corecodeacademy.com/certificate/?cuid={cuid}"

    qrcode_gen = qrcode.QRCode(
        version = 2,
        box_size = 10,
        border = 2,
    )

    qrcode_gen.add_data(url)
    qrcode_gen.make(fit=True)
    qr_image = qrcode_gen.make_image()
    qr_image = qr_image.resize((244, 244))

    cert.paste(qr_image, (320, 2825))

    database[cuid] = {
        "cuid": cuid,
        "name": name,
        "url": url
    }

    cert.save(f"{cuid}.jpg") 

pprint(database)
