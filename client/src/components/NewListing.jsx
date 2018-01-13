import React from 'react';
import { Link } from 'react-router-dom';
import ReactS3 from 'react-s3';

class NewListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 'imagePlaceholder.png'
    };
    this.config = {
      bucketName: 'legotrader',
      albumName: 'listing',
      region: 'eu-west-1',
      accessKeyId: 'AKIAINIPCNUONYMQQAWQ',
      secretAccessKey: '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'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    console.log(e.target.src);
    ReactS3.upload('imagePlaceholder.png', this.config)
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
  }

  render () {
    return (
      <div>
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active"><Link to="/">Home</Link></li>
          </ol>
          <form>
            <img onChange={this.handleChange} src={this.state.img} className="img-photo img-thumbnail rounded" alt="Photo" />
            <div className="form-group">
              <input type="file" className="form-control-file" id="selectImage" />
            </div>

            <div className="form-group">
              <input type="text" className="form-control form-control-lg" id="titleInput" placeholder="Lego Title" />
            </div>

            <div className="form-group">
              <textarea className="form-control form-control-lg" id="descriptionInput" rows="3"  placeholder="Description"></textarea>
            </div>

            <div className="form-group">
              <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                <option>-- CATEGORY --</option>
                <option>Star Wars</option>
                <option>Cityscapes</option>
                <option>Farmers</option>
              </select>
            </div>

            <div className="form-group">
              <input type="text" className="form-control form-control-lg" id="nameInput" placeholder="Your Name" />
            </div>

            <div className="form-group">
              <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
            </div>

            <div className="form-group">
              <input type="text" className="form-control form-control-lg" id="zipInput" placeholder="ZIP Code" />
            </div>

            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/">
                  <button className="btn">
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <Link to="/user-listings">user listings</Link>
        <Link to="/sign-up">sign-up</Link>
      </div>
    );
  }
}

export default NewListing;