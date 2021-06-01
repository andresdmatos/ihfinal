import React from 'react';

function navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        
      </div>
    </div>
  </div>
</nav>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4 col-sm-12">
                    <div className='card text-center'>
                        <img src="https://s3.amazonaws.com/nikeinc/assets/102423/SU21_Nike_MLB_City_Connect_Chicago_White_Sox_11_hd_1600.jpg?1621879348"/>
                            <div class="card-body">
                                    
                            </div>
                    </div>    
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div className='card text-center'>
                        <img src="https://s3.amazonaws.com/nikeinc/assets/102320/SU21_Nike_MLB_City_Connect_Miami_Marlins_12_hd_1600.jpg?1620891321"/>
                            <div class="card-body">
                                    
                                
                            </div>
                    </div>    
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div className='card text-center'>
                        <img src="https://s3.amazonaws.com/nikeinc/assets/101699/SU21_Nike_MLB_City_Connect_Series_Boston_Red_Sox_04_hd_1600.jpg?1615143604"/>
                            <div class="card-body">
                                    
                            </div>
                    </div>    
                </div>
            </div>
        

            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <div className='card text-center'>
                        <img src="https://s3.amazonaws.com/nikeinc/assets/102423/SU21_Nike_MLB_City_Connect_Chicago_White_Sox_11_hd_1600.jpg?1621879348"/>
                            <div class="card-body">
                                    
                            </div>
                    </div>    
                </div>
                <div class="col-lg-6  col-sm-12">
                    <div className='card text-center'>
                        <img src="https://s3.amazonaws.com/nikeinc/assets/102320/SU21_Nike_MLB_City_Connect_Miami_Marlins_12_hd_1600.jpg?1620891321"/>
                            <div class="card-body">
                                    
                            </div>
                    </div>    
                </div>
            </div>
       


            </div>

        </div> 

    );
}
export default navbar;