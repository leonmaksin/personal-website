export default function Card(props) {
    const techstack = props.input.techstack.map(function(stackElement) {
        return <span className="card-text rounded bg-secondary text-white p-1 m-1 custom-text d-inline-block"><small>
            {stackElement}
            </small></span>
    })
    let numBreaks = props.input.breaks
    const breaks = []
    for (let i=0; i<numBreaks; ++i) {
        breaks.push(<br></br>)
    }
    return (
        <div className="card-custom card mt-4">
          <a href={props.input.url} target="_blank" rel="noreferrer">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"./images/"+props.input.img} className="rounded-left img-fluid card-custom-image" alt="..."/>
                </div>
                <div className="col-md-8 card-custom-body rounded-right">
                    <div className="card-body">
                        <p className="card-text mb-1 text-muted custom-text"><small>{props.input.blurb}</small></p>
                        <h5 className="card-title mb-2 custom-text">{props.input.title}</h5>
                        <p className="card-text mb-3 custom-text">{props.input.description}</p>
                        {breaks}
                        {techstack}
                    </div>
                </div>
            </div>
          </a>
      </div>
    )
}
