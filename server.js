alert('Memasuki mode js');
const head = {
  'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36",
  'sec-ch-ua': "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
  'sec-ch-ua-mobile': "?1",
  'referrerPolicy': "no-referrer",
  'sec-ch-ua-platform': "\"Android\"",
  'sec-fetch-site': "same-origin",
  'sec-fetch-mode': "cors",
  'sec-fetch-dest': "empty",
  'referer': "https://www.tiktok.com/@rief.code/video/7353021273494048006?_t=8nEscRsDhsl&_r=1",
  'accept-language': "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
  //'Cookie': "tt_chain_token=pBAno1oBR9xzmvIr7j8YiA==; tiktok_webapp_theme=light; odin_tt=33bb6db104ef894e741235579ea023d40a4b7000fa5e8fb57e41887ed8a61fc48573ae839737b47019f36ba1bf06866026ff148739b2a4b766dd64919148ff0b2a538a4a99438870d859c5829c721588; ak_bmsc=7408E9B477871F67F8D67E3A01B9A0A3~000000000000000000000000000000~YAAQDA81F4gWbQmQAQAA6bRoHxjuN+cJ5ywndvYVGpaSCZqgmDv307gqF9BOMBsBS5Mh4hAwLc8JzPHe7Xwg4GjuU+ceSyjdj0wnsm9l1FC2NIV6MPYY1GEzgVVooyxvFwyXpxEP4X4TQ1BE1SsXPk3I8n7RvUV3+cj6t6h2DbuM7HYLmfo3Rj3ls9E68LpvlhCAo5Jkxx8/dDIesWRYTdCyCAS5KTrhH40l3O8dyV24e2ZpoEaEuF1iXnG5ghozBePgS0Y8RiqvbntLLB2Gv4Ftf/4T6Zif/243qvkRW3zGy3wdU6llaRNc8Lequ8CwBYZzc2w5hzdBBAU7Wk0NFjsY+fij8AgfWQmqvG3sX0Ac0Iv1c7Y7iSferSATdjXU+CB17d7wingVxKB990ylANVjySNzX+VjlkbAkw==; msToken=JXo8WDJn_rVXcXqp2PGvlvXV6LHoxGYfFrqE5x0Am7_U9qhkw8RmO9udk9zNwz9CTDCVx7wUv8lqN9T-_665UEA6etVR4iiZ0e0yJ_o2qYnx8o1HQl82cxjg4LiPrV4gT8rnIKsqrgsA; tt_csrf_token=3kQ50JVf-8BkWksmCKB8RPKdPRNjv2HDxNww; msToken=KOeSGRleZvkq9bXrilfvDYgXlQpRRH6PFETuVWw-7b-a5XXps1zTnMZ_Sl6KnyT50huKjT1pUW0-WLpzO8DL9B211JXvIP2MOxOYIIVz-nMuGaKfH4NemYBVxmGfSz8SjrILWBQEmlcU; bm_sv=1A8D22AAE6E467ECDCC8261E614FC9A9~YAAQDA81FzglbQmQAQAAauNqHxg0+G+gbNxmk677xmX13zIi+LLgtmk+qtUJnUzB9mF1H7M9vLzVTs41iRrDZP8Sa/ttHSdPTETZN3DMzDp3TsQCHMTuq/zBna+SNLGzrWPYKbwo88TfjRzLyrPiMBYM0vGnQWVw7rZTIH9qcyTXEtp/5xzMgnjOOC8n+0AZlHzHe0sP22Jeah9EmmCvQkLCA5TEUj3XCQa+wzDJO4FXT4dqJS1iG0xNpBKGVI7u~1; ttwid=1%7CoQlh_RGL8Sd5cdK5RU5PWFlPUSLG00L752SJf41YKTE%7C1718514030%7C3336f346c9d25a2c8ad2b0665866c622cced156b48a57d2b5e2995b4a4bfb60d"
}
fetch('https://www.tiktok.com/api/item/detail/?aid=1988&app_id=1180&app_language=id-ID&app_name=tiktok_web&browser_language=id&browser_name=Mozilla&browser_online=true&browser_platform=Linux%20armv81&browser_version=5.0%20%28Linux%3B%20Android%2010%3B%20K%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F124.0.0.0%20Mobile%20Safari%2F537.36&channel=tiktok_web&clientABVersions=70508271&clientABVersions=72139452&clientABVersions=72224360&clientABVersions=72313476&clientABVersions=72350762&clientABVersions=72373487&clientABVersions=72375446&clientABVersions=72380604&clientABVersions=72402045&client_ab_versions=70508271&client_ab_versions=72139452&client_ab_versions=72224360&client_ab_versions=72313476&client_ab_versions=72350762&client_ab_versions=72373487&client_ab_versions=72375446&client_ab_versions=72380604&client_ab_versions=72402045&cookie_enabled=true&coverFormat=0&device_id=7380790376980039186&device_platform=web_mobile&focus_state=true&from_page=video&history_len=2&is_fullscreen=false&is_page_visible=true&itemId=7353021273494048006&item_id=7353021273494048006&language=id-ID&os=android&priority_region=&referer=&region=ID&screen_height=806&screen_width=360&sourceType=33&traffic_type=0&tz_name=Asia%2FJakarta&uCode=&u_code=&user_info_type=1&web_id=7380790376980039186&webcast_language=id-ID&msToken=JXo8WDJn_rVXcXqp2PGvlvXV6LHoxGYfFrqE5x0Am7_U9qhkw8RmO9udk9zNwz9CTDCVx7wUv8lqN9T-_665UEA6etVR4iiZ0e0yJ_o2qYnx8o1HQl82cxjg4LiPrV4gT8rnIKsqrgsA&X-Bogus=DFSzswVOjM2ANVt2tUOxZUadxO6h&_signature=_02B4Z6wo00001NjY7.wAAIDA1aAXm9f9KoDY2OtAAFBda9',{
   method: 'get',
   headers: head})
    .then((data) => data.json())
    .then((result) => console.log(result.itemInfo.itemStruct.video.playAddr))
          
