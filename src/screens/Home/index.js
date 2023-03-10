const Home = () => {
  return (
    <>
      <div>
        <div className="row justify-content-between align-items-center">
          <div className="col-5">
            <div className="fs-1 fw-bold">
              Hãy làm cho các Video của bạn trở nên tốt nhất.
            </div>
            <div>
              Sao phải xem một Video chất lượng thấp trong khi bạn có thể khiến
              nó trở nên tốt hơn. Cùng chúng tôi nâng cấp Video của bạn.
            </div>
          </div>
          <div className="col-6">
            <img
              className="w-100"
              src="https://d38b044pevnwc9.cloudfront.net/site/en/solutions/image/1.jpg"
              alt="anh demo"
            ></img>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="btn bg-dark text-white">Bắt đầu ngay</div>
        </div>
        <div className="row justify-content-between mt-5">
            <div className="col-5">
                    <img className="w-100" src="https://d1j8r0kxyu9tj8.cloudfront.net/files/1554306261IDrTbXNDaed9pwB.png" alt="display-macbook1"></img>
            </div>
            <div className="col-6">
                <div className=" fs-2 fw-bold">Đơn giản để sử dụng</div>
                <div>Chỉ với vài thao tác, bạn đã có thể nâng cấp video của mình!</div>
            </div>
        </div>
        <div className="row mt-5 bg-dark position-absolute" style={{left: "12px",}}>
            <div className="text-center fs-2 fw-bold text-white mt-5">Những sản phẩm nổi bật</div>
            <div className="row g-3">
                <div className="col-6">
                    <img className="w-100" src="https://d38b044pevnwc9.cloudfront.net/site/en/solutions/image/2.jpg" alt="anh"></img>
                </div>
                <div className="col-6">
                    <img className="w-100" src="https://d38b044pevnwc9.cloudfront.net/site/en/solutions/image/9.jpg" alt="anh"></img>
                </div>
                <div className="col-6">
                    <img className="w-100" src="https://d38b044pevnwc9.cloudfront.net/site/en/solutions/image/4.jpg" alt="anh"></img>
                </div>
                <div className="col-6">
                    <img className="w-100" src="https://d38b044pevnwc9.cloudfront.net/site/en/solutions/image/8.jpg" alt="anh"></img>
                </div>  
                
            </div>
        </div>
        <div>
            
        </div>
      </div>
    </>
  );
};

export default Home;
