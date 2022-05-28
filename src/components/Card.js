import "bootstrap/dist/css/bootstrap.min.css";
export default function Card(props) {
  return (
    <div class="card m-3" style={{ width: "85vw", height: "61vh" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={props.image}
            class="img-fluid rounded-start m-4"
            alt="..."
            height="500px"
            width="200px"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <br />
            <h2 class="card-title">{props.title}</h2>
            <p class="card-text">
              <small class="text-muted">{props.author}</small>
            </p>
            <br />
            <h6 class="card-text">{props.text}</h6>
            <br />
            <br />
            <div class="d-grid gap-2 col-6 mx-auto">
              <a href={props.href} class="btn btn-primary" target="_blank">
                Buy this Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
