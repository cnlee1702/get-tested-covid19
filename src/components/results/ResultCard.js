
import React from 'react';
import styled from 'styled-components';
import ReadMore from '../shared/ReadMore.js';
import { ButtonGroup } from 'reactstrap';
import { darken } from 'polished';

const StyledResultCard = styled.div`
  border-top: 1px solid #eee;
  padding: 40px 20px;

  h3 {
    font-size: 1.5rem;
    margin-top: -4px;
  }

  p {
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 1.5em;
  }

  .card__meta {
    margin-top: -5px;
  }

  .card__dist {
    color: #00a4a6;
    font-weight: 600;
  }

  .card__req {
    margin: 15px 0 5px;
    line-height: 1.8em;

    .badge {
      margin-right: 5px;
      font-size: 13px;
      padding: 0.4em 0.6em;
    }

    .badge-danger {
      background-color: ${props => props.theme.colorRed};
    }
  }

  .card__descr {
    font-weight: 400;
  }

  .card__actions {
    margin-top: 15px;

    .fa {
      margin-right: 5px;
    }
  }

  .card__actions-mobile {
    display: block;

    @media screen and (min-width: ${props => props.theme.bpSmall}) {
      display: none;
    }
  }

  .card__actions-desktop {
    display: none;

    @media screen and (min-width: ${props => props.theme.bpSmall}) {
      display: block;
    }
  }

  .card__features {
    margin-top: 5px;
    font-weight: 500;

    .fa {
      margin-right: 5px;
    }
  }

  .card__feature {
    width: 50%;
    display: inline-block;
    font-weight: 300;
    font-size: 14px;

    .fa {
      margin-right: 8px;
    }

    strong {
      font-weight: 600;
    }

    @media screen and (max-width: ${props => props.theme.bpSmall}) {
      width: 100%;
    }
  }

  .card__ability-icon {
    height: 20px;
    margin-right: 5px;
  }
`

class ResultCard extends React.Component {
  render() {
    const { name, dist, address, city, state, zip, phone, link, description, docScreen, appReq, driveThru } = this.props.item;
    return (
        <StyledResultCard>
          <h3>{this.props.index + 1}. {name}</h3>
          <p className="card__meta">
            {dist !== null && dist !== undefined && (<><span className="card__dist">{dist.toFixed(2)} mi</span> &middot; </>)}{address}<span className="d-none d-sm-inline">, {city}</span> &middot; {phone.split(')')[0]}) {phone.split(')')[1]}
          </p>
          <div className="card__req">
            {docScreen === "No" && appReq === "No" && <span class="badge badge-success"><i className="fa fa-check icon-left" />Walk-in testing available</span>}
            {(docScreen !== "No" || appReq !== "No") && (
              <>
                {docScreen === "Yes" && <span className="badge badge-danger"><i className="fa fa-stethoscope icon-left" />Doctor's screening required</span>}
                {appReq === "Yes" && <span className="badge badge-danger"><i className="fa fa-calendar icon-left" />Appointment required</span>}
              </>
            )}
          </div>
          <p className="card__descr">
            <ReadMore lines={2}>
                {description}
            </ReadMore>
          </p>
          <div className="card__features">
            <div className="card__feature"><i className="fa fa-automobile" />Drive-through testing <strong>{driveThru}</strong></div>
          </div>
          <div className="card__actions">
            <ButtonGroup className="card__actions-mobile" size="sm">
              <a class="btn btn-outline-primary" href={`https://www.google.com/maps/dir/current+location/${address}+${city}+${state}+${zip}/`} target="_blank" rel="noopener noreferrer">Get directions</a>
              {link !== '' && <a className="btn btn-outline-primary" href={link} target="_blank" rel="noopener noreferrer">Visit website</a>}
              {phone !== '' && (
                <a className="btn btn-outline-primary card__call" href={`tel: ${phone}`}  target="_blank" rel="noopener noreferrer">Call</a>  
              )}
            </ButtonGroup>
            <ButtonGroup className="card__actions-desktop" size="sm">
              <a class="btn btn-outline-primary" href={`https://www.google.com/maps/dir/current+location/${address}+${city}+${state}+${zip}/`} target="_blank" rel="noopener noreferrer"><i className="fa fa-map-marker" />Get directions</a>
              {link !== '' && <a className="btn btn-outline-primary" href={link} target="_blank" rel="noopener noreferrer"><i className="fa fa-external-link-square" />Visit website</a>}
            </ButtonGroup>
          </div>
        </StyledResultCard>
    )
  }
}

export default ResultCard;