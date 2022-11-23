const data = {
  products: [
    {
      name: 'iPhone 14 Pro Max 128GB',
      category: 'Phones',
      price: 999,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/4/19/637859769705950103_iPhone%2013%20Promax%20(1).jpg'
    },
    {
      name: 'iPhone 13 Pro Max 128GB',
      category: 'Phones',
      price: 899,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/5/638005785995780745_iphone-13-pro-max-dd-bh.jpg'
    },
    {
      name: 'iPhone 13 512GB',
      category: 'Phones',
      price: 850,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/25/637970354555201931_iphone-13-bh-2nam-dac-quyen.jpg'
    },
    {
      name: 'iPhone 12 Pro Max 128GB',
      category: 'Phones',
      price: 657,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/1/637686973775896947_ip-12-dd.jpg'
    },
    {
      name: 'iPhone SE 2022',
      category: 'Phones',
      price: 550,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/9/637823924290106355_iphone-se-2022-dd.jpg'
    },
    {
      name: 'iPhone 11 64GB',
      category: 'Phones',
      price: 550,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/26/637393169370871358_ip-11-dd.png'
    },
    {
      name: 'Ipad Pro 11 2021 M1',
      category: 'Ipads',
      price: 900,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/4/21/637546013880588874_ipad-pro-11-wifi-dd.jpg'
    },
    {
      name: 'Ipad Gen 9 10.2 inch 2021',
      category: 'Ipads',
      price: 890,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673410984406346_ipad-10-2-2021-wi-fi-dd.jpg'
    },
    {
      name: 'Ipad Mini 6 8 inch Wifi 5G 2021',
      category: 'Ipads',
      price: 890,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673371022722752_ipad-mini-8-3-2021-wi-fi-dd.jpg'
    },
    {
      name: 'Ipad Mini 6 8.3 inch 2021',
      category: 'Ipads',
      price: 890,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673371022722752_ipad-mini-8-3-2021-wi-fi-dd.jpg'
    },
    {
      name: 'Ipad Air 5 8.3 inch 2021',
      category: 'Ipads',
      price: 890,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/9/637824189776891172_ipad-air-2022-wifi-cell-dd.jpg'
    },
    {
      name: 'MacBook Air M2 2022 13 inch',
      category: 'Macbooks',
      price: 1200,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/7/637901915720184032_macbook-air-m2-2022-den-dd.jpg'
    },
    {
      name: 'MacBook Pro M2 2022 13 inch',
      category: 'Macbooks',
      price: 1400,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/7/637901935364438149_macbook-pro-m2-2022-xam-dd.jpg'
    },
    {
      name: 'MacBook Pro M2 2022 13 inch',
      category: 'Macbooks',
      price: 1100,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/11/12/637407970062806725_mba-2020-gold-dd.png'
    },
    {
      name: 'MacBook Pro 14 inch 2021',
      category: 'Macbooks',
      price: 1100,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/20/637703173013037856_macbook-pro-14-2021-xam-dd.jpg'
    },
    {
      name: 'MacBook Pro M2 13 inch 2022 Ram 16GB',
      category: 'Macbooks',
      price: 1100,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/7/637901935364438149_macbook-pro-m2-2022-xam-dd.jpg'
    },
    {
      name: 'Apple Watch Ultra GPS + Cellular 49mm Titanium Alpine Loop Small',
      category: 'Watchs',
      price: 1100,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/8/637982457565218496_apple-watch-ultra-49mm-alpine-loop-cam-dd.jpg'
    },
    {
      name: 'Apple Watch Ultra GPS + Cellular 49mm Titanium Alpine Loop Large',
      category: 'Watchs',
      price: 1100,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/15/638041196321660005_apple-watch-ultra-gps-cellular-49mm-titanium-alpine-loop-large-dd.jpg'
    },
    {
      name: 'Apple Watch Series 8 GPS viền nhôm cao su',
      category: 'Watchs',
      price: 1100,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/12/637985935050489552_apple-watch-series-8-gps-41mm-do-dd.jpg'
    },
    {
      name:'Lenovo IdeaPad Gaming 3 15IAH7 i5',
      category:'laptop',
      price:'23.790.000',
      brand:'Lenovo',
      color:['Black'],
      image:'https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-15ARH7-black-14.jpg'
    },
    {
      name:'ThinkPad X1 Carbon Gen 10 Core i7-1255U',
      category:'laptop',
      price:'37.900.000',
      brand:'Lenovo',
      color:['Black'],
      image:'https://mac24h.vn/images/detailed/49/x1-carbon-gen-10_phll-j6_e8wb-ml.png?t=1663659320'
    },
    {
      name:'Lenovo ThinkBook 15 G4 IAP',
      category:'laptop',
      price:'24,990,000',
      brand:'Lenovo',
      color:['Black'],
      image:'https://product.hstatic.net/1000233206/product/lenovo-thinkbook-15-g4-iap-21dj00cwvn-i7-1255u_be0b639ce8b943539bac696bbd1b5941_master.png'
    },
    {
      name:'Lenovo IdeaPad 5 Pro 16ARH7',
      category:'laptop',
      price:'26,490,000',
      brand:'Lenovo',
      color:['White'],
      image:'https://product.hstatic.net/1000233206/product/lenovo-ideapad-5-pro-16arh7-82sn00afvn_38a6e8f093ad4572881c2e30eeab27bb_master.png'
    },{
      name:'Legion 7 16IAX7',
      category:'laptop',
      price:'73,990,000',
      brand:'Lenovo',
      color:['Gray'],
      image:'https://xgear.net/wp-content/uploads/2022/08/800x800-legion7-22-3.gif'
    },
    {
      name:'Lenovo IdeaPad Gaming 3 15IAH7 i5',
      category:'laptop',
      price:'23.790.000',
      brand:'Lenovo',
      color:['Black'],
      image:'https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-15ARH7-black-14.jpg'
    },
    {
      name:'ThinkPad X1 Carbon Gen 10 Core i7-1255U',
      category:'laptop',
      price:'37.900.000',
      brand:'Lenovo',
      color:['Black'],
      image:'https://mac24h.vn/images/detailed/49/x1-carbon-gen-10_phll-j6_e8wb-ml.png?t=1663659320'
    },
    {
      name:'Lenovo ThinkBook 15 G4 IAP',
      category:'laptop',
      price:'24,990,000',
      brand:'Lenovo',
      color:['Black'],
      image:'https://product.hstatic.net/1000233206/product/lenovo-thinkbook-15-g4-iap-21dj00cwvn-i7-1255u_be0b639ce8b943539bac696bbd1b5941_master.png'
    },
    {
      name:'Lenovo IdeaPad 5 Pro 16ARH7',
      category:'laptop',
      price:'26,490,000',
      brand:'Lenovo',
      color:['White'],
      image:'https://product.hstatic.net/1000233206/product/lenovo-ideapad-5-pro-16arh7-82sn00afvn_38a6e8f093ad4572881c2e30eeab27bb_master.png'
    },{
      name:'Legion 7 16IAX7',
      category:'laptop',
      price:'73,990,000',
      brand:'Lenovo',
      color:['Gray'],
      image:'https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-15ARH7-black-14.jpg'
    }
  ]
}

export default data