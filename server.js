const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { Buffer } = require('safe-buffer');
const { get } = require('systeminformation');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing body dari request
app.use(bodyParser.urlencoded({ extended: true }));

// Mengirimkan halaman HTML form
app.get('/tes', (req, res) => {
    res.send('haii')
//File(__dirname + '/index.html');
});

// Menangani POST request dari form URL
app.post('/download', (req, res) => {
    const url = req.body.url;
    console.log(`URL yang diterima: ${url}`);
    var urlvidi0 = apacoba(req, res, url)
});

async function apacoba(req, res, link){
    var idz = 'video/';
    if (link.includes(idz)){
      var url = await regexurl(link)
    } else {
       const get1 = await axios(link,{
       method:'get',
       headers:{
            'accept': "*/*",
            'accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
            'cookie': 'tt_chain_token=zcCEGW55CjWsgf6gIV9gHA==; odin_tt=1ef1485ae5eb6c9e79c9a0fc0700f8b891c91bd3621cc35044e6513de1e1b91979871b84bc93b8fe0681ae6158aae532f8ff60b3c16a60338a332d5021a1f567930d1e71b703e391979e814f6f13f51e; passport_csrf_token=7849d343c2a77cc680e2cdd011ac3128; passport_csrf_token_default=7849d343c2a77cc680e2cdd011ac3128; _ttp=2i0X4DJG8xkx1HsPlJ1Acwxkp6s; tt_csrf_token=jprJbKFT-qMtS-R400NdVPdC5rEYYPzLBikY; ak_bmsc=6645B8F05C14827C0495223564F0D435~000000000000000000000000000000~YAAQHQ81FxbMNTqQAQAAOJtJQBg9Cpjv7Scgv6pbk89U7I00h7C8Kj6yp804d83YE5Mscf5rwSaAbTFdCHra2Od+6v7bjmuIUpO7VpVE9+3ZjNiX+LRu0YwDqx5QnRNVuGbMXGYu0tT4BWc7Cf7rVPyjDRIhjhll+teOeUmthL/TSy/QCDtBACvwPNZNQQc1VIkbe5yRpJkcQP8ZsS7CcZ+CpgA8Mq7/cYwHf0V3N6sIZlHtYSiG2sbBShnG2JOS3UiAUgv9m0RGv+O5b4a2HCEAit2ixsnoiHD+M4nEKopSu8FM1tN+5FVPWPt27X91ykfAGa8PFJ/oP8mCowH9aK6bVAsvX/6PgD2HXrkP5Gx9BzcRZjXl+0Hd5u66tfo+1ysePMO9DRt+Enw=; ttwid=1%7Cag-HVdjDKIjq4KjjbxG7m6wva6CMARWQ98gbS2Nkj7s%7C1719066039%7C5fbe83245bc1357380b3e764a2da52cacfa3b6ded6c0f6382794a60325f5aaad; bm_sv=96B0E119B043DEBDC35E652FC483A70E~YAAQFw81F+MKZjuQAQAA83VTQBioDWTQoOYXvn554cWw4mDkxLYhN/GnRVx8b97CY+mL7y5qbKd8tQ6D0+IhtQClTskh0izsRzM6frd+dVqfOLxpljr8A3dVnQG7YDCuF41WXaRVe23q/iILpQ5Z720HxSmIz6ZHOSuG/4/duKFPnaKMwz8z8f53TlH99pRpLHzF0fhJ+YNex/G6YGBI6iZM0Inda+XSrZBkol1KDh68sylVgEFZoJ6bgRelfE9j~1; s_v_web_id=verify_lxq7nauu_QG2aNNCL_wzvR_4JMK_BjWG_tea4t12sX7jw; msToken=WtpZ-911HrWgz99t1JAhHqPCOfIL1u_m3SbKoAiLTROFegnKBlUHt0QQwdJ6GMQjHx97uOoXDc1jMVv01_x81I3FqvCt1nih107rIb0BNxEm6lHTp3T1pqNzspE=',
            'priority': 'i',
      }
    })
    var url = await regexurl(get1.request.res.responseUrl)
   }
   Ip(req, res, url)
}
async function regexurl(link){
    const get1 = await axios(link,{
        method:'get',
        headers:{
            'accept': "*/*",
            'accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
            'cookie': 'tt_chain_token=zcCEGW55CjWsgf6gIV9gHA==; odin_tt=1ef1485ae5eb6c9e79c9a0fc0700f8b891c91bd3621cc35044e6513de1e1b91979871b84bc93b8fe0681ae6158aae532f8ff60b3c16a60338a332d5021a1f567930d1e71b703e391979e814f6f13f51e; passport_csrf_token=7849d343c2a77cc680e2cdd011ac3128; passport_csrf_token_default=7849d343c2a77cc680e2cdd011ac3128; _ttp=2i0X4DJG8xkx1HsPlJ1Acwxkp6s; tt_csrf_token=jprJbKFT-qMtS-R400NdVPdC5rEYYPzLBikY; ak_bmsc=6645B8F05C14827C0495223564F0D435~000000000000000000000000000000~YAAQHQ81FxbMNTqQAQAAOJtJQBg9Cpjv7Scgv6pbk89U7I00h7C8Kj6yp804d83YE5Mscf5rwSaAbTFdCHra2Od+6v7bjmuIUpO7VpVE9+3ZjNiX+LRu0YwDqx5QnRNVuGbMXGYu0tT4BWc7Cf7rVPyjDRIhjhll+teOeUmthL/TSy/QCDtBACvwPNZNQQc1VIkbe5yRpJkcQP8ZsS7CcZ+CpgA8Mq7/cYwHf0V3N6sIZlHtYSiG2sbBShnG2JOS3UiAUgv9m0RGv+O5b4a2HCEAit2ixsnoiHD+M4nEKopSu8FM1tN+5FVPWPt27X91ykfAGa8PFJ/oP8mCowH9aK6bVAsvX/6PgD2HXrkP5Gx9BzcRZjXl+0Hd5u66tfo+1ysePMO9DRt+Enw=; ttwid=1%7Cag-HVdjDKIjq4KjjbxG7m6wva6CMARWQ98gbS2Nkj7s%7C1719066039%7C5fbe83245bc1357380b3e764a2da52cacfa3b6ded6c0f6382794a60325f5aaad; bm_sv=96B0E119B043DEBDC35E652FC483A70E~YAAQFw81F+MKZjuQAQAA83VTQBioDWTQoOYXvn554cWw4mDkxLYhN/GnRVx8b97CY+mL7y5qbKd8tQ6D0+IhtQClTskh0izsRzM6frd+dVqfOLxpljr8A3dVnQG7YDCuF41WXaRVe23q/iILpQ5Z720HxSmIz6ZHOSuG/4/duKFPnaKMwz8z8f53TlH99pRpLHzF0fhJ+YNex/G6YGBI6iZM0Inda+XSrZBkol1KDh68sylVgEFZoJ6bgRelfE9j~1; s_v_web_id=verify_lxq7nauu_QG2aNNCL_wzvR_4JMK_BjWG_tea4t12sX7jw; msToken=WtpZ-911HrWgz99t1JAhHqPCOfIL1u_m3SbKoAiLTROFegnKBlUHt0QQwdJ6GMQjHx97uOoXDc1jMVv01_x81I3FqvCt1nih107rIb0BNxEm6lHTp3T1pqNzspE=',
            'priority': 'i',
        }
    })
    var item = '"UrlList":(.*)/'
    const urlist = get1.data.match(item)
    const linkpoke = urlist[1]
    const link3 = linkpoke.split(",")[1]
    const done1 = link3.replace('"','').replace('"]','').replace(/\\u002F/g, "/")
   // console.log(get1.request.res.responseUrl)
    return done1;
}


async function Ip(req, res, link){
    const url = await axios(link,{
        method:'get',
        responseType: 'arraybuffer',
        headers: {
            'accept': '*/*',
            'accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
            'cookie': 'tt_chain_token=zcCEGW55CjWsgf6gIV9gHA==; odin_tt=1ef1485ae5eb6c9e79c9a0fc0700f8b891c91bd3621cc35044e6513de1e1b91979871b84bc93b8fe0681ae6158aae532f8ff60b3c16a60338a332d5021a1f567930d1e71b703e391979e814f6f13f51e; passport_csrf_token=7849d343c2a77cc680e2cdd011ac3128; passport_csrf_token_default=7849d343c2a77cc680e2cdd011ac3128; _ttp=2i0X4DJG8xkx1HsPlJ1Acwxkp6s; tt_csrf_token=jprJbKFT-qMtS-R400NdVPdC5rEYYPzLBikY; ak_bmsc=6645B8F05C14827C0495223564F0D435~000000000000000000000000000000~YAAQHQ81FxbMNTqQAQAAOJtJQBg9Cpjv7Scgv6pbk89U7I00h7C8Kj6yp804d83YE5Mscf5rwSaAbTFdCHra2Od+6v7bjmuIUpO7VpVE9+3ZjNiX+LRu0YwDqx5QnRNVuGbMXGYu0tT4BWc7Cf7rVPyjDRIhjhll+teOeUmthL/TSy/QCDtBACvwPNZNQQc1VIkbe5yRpJkcQP8ZsS7CcZ+CpgA8Mq7/cYwHf0V3N6sIZlHtYSiG2sbBShnG2JOS3UiAUgv9m0RGv+O5b4a2HCEAit2ixsnoiHD+M4nEKopSu8FM1tN+5FVPWPt27X91ykfAGa8PFJ/oP8mCowH9aK6bVAsvX/6PgD2HXrkP5Gx9BzcRZjXl+0Hd5u66tfo+1ysePMO9DRt+Enw=; ttwid=1%7Cag-HVdjDKIjq4KjjbxG7m6wva6CMARWQ98gbS2Nkj7s%7C1719066039%7C5fbe83245bc1357380b3e764a2da52cacfa3b6ded6c0f6382794a60325f5aaad; bm_sv=96B0E119B043DEBDC35E652FC483A70E~YAAQFw81F+MKZjuQAQAA83VTQBioDWTQoOYXvn554cWw4mDkxLYhN/GnRVx8b97CY+mL7y5qbKd8tQ6D0+IhtQClTskh0izsRzM6frd+dVqfOLxpljr8A3dVnQG7YDCuF41WXaRVe23q/iILpQ5Z720HxSmIz6ZHOSuG/4/duKFPnaKMwz8z8f53TlH99pRpLHzF0fhJ+YNex/G6YGBI6iZM0Inda+XSrZBkol1KDh68sylVgEFZoJ6bgRelfE9j~1; s_v_web_id=verify_lxq7nauu_QG2aNNCL_wzvR_4JMK_BjWG_tea4t12sX7jw; msToken=WtpZ-911HrWgz99t1JAhHqPCOfIL1u_m3SbKoAiLTROFegnKBlUHt0QQwdJ6GMQjHx97uOoXDc1jMVv01_x81I3FqvCt1nih107rIb0BNxEm6lHTp3T1pqNzspE=',
            'priority': 'i',
            'range': 'bytes=0-',
            // 'referer': 'https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-v-0068/oIBUu0fWAyVzziACyu5AAikziNEgaEWoIwBAVJ/?a=1988&bti=NDU3ZjAwOg%3D%3D&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=20712&bt=10356&ds=4&ft=4fUEKMO_8Zmo0YZRP-4jVWB7ypWrKsd.&mime_type=video_mp4&qs=13&rc=am9lOHM5cms5czMzNzczM0Bpam9lOHM5cms5czMzNzczM0BtLWpeMmRjamtgLS1kMTZzYSNtLWpeMmRjamtgLS1kMTZzcw%3D%3D&btag=e00050000&expire=1719238435&l=20240622141135D0C2A86A7A0C5F30BDEA&ply_type=2&policy=2&signature=8077fbf574e68d61eee5c5ffd5ae6500&tk=tt_chain_token',
            // 'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'sec-fetch-dest': 'video',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 Edg/126.0.0.0'
          }
    });
    const video = Buffer.from(url.data);
    console.log('Dikirimkan')
    res.set({
        'Accept-Ranges':'bytes',
        'Content-Type': 'video/mp3',
        'Content-Length': video.length, 
        'Content-Disposition': 'inline; filename="video.mp4"'
    });
    res.send(video);
}
// Mulai server pada port yang ditentukan
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
