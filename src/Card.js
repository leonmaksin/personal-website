export default function Card(props) {
    const techstack = props.input.techstack.map(function(stackElement) {
        return <span className="card-text rounded bg-secondary text-white p-1 m-1 custom-text"><small>
            {stackElement}
            </small></span>
    })
    let numBreaks = props.input.breaks
    const breaks = []
    for (let i=0; i<numBreaks; ++i) {
        breaks.push(<br></br>)
    }
    return (
        <div className="card mt-4 card-custom">
          <a href={props.input.url} target="_blank">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"./images/"+props.input.img} className="rounded-start card-custom-image" alt="..."/>
                </div>
                <div className="col-md-8 card-custom-body">
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