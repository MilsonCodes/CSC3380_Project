import { connect } from "react-redux";
import { logIn, logOut, setName } from "../../actions/user";
import styled from "styled-components";
import Button from "../../components/Button";
import { lighten } from "polished";
import Card from "../../components/Card";

const mapDispatchToProps = {
  logIn,
  logOut,
  setName
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  user: state.user,
  name: state.user.name
});

let Profile = ({ logIn, logOut, loggedIn, setName, user, name, ...props }) => {
  const [options, setOptions] = React.useState({});
  const UpdateForm = () => {
    let Span = styled.span`
      background-color: "black";
      margin: auto;
      display: flex;
    `;
    let Form = styled.form`
      border: none;
      span {
        float: right;
      }
    `;
    let Input = styled.input`
      width: 95%;
      border-radius: 30px;
      border: none;
      box-shadow: 0 0 10px 0 ${p => lighten(0.2, p.theme.secondary)};
      min-height: ${p => p.height};
      margin: 5px;
      padding: 5px;
      outline: none;
      transition: all ease 0.5s;
      font-family: "Montserrat", sans-serif;
      &::placeholder {
        opacity: 0.4;
        input:focus ~ &,
        &.filled {
          display: none;
        }
      }
    `;
    function handleSubmit(event) {
      event.persist();
      const name = event.target[0].value;
      const password = event.target[1].value;
      setName(name);
    }

    let newSpecial = e => {
      e.persist();
      e.preventDefault();
      let title = e.target[0].value;
      let description = e.target[1].value;
      let start = e.target[2].value;
      let end = e.target[3].value;
      let file = e.target[4].value;
      setOptions({
        title: title,
        image: file,
        description: description,
        startDate: start,
        endDate: end,
        owner: user.name,
        favorite: false
      });
    };

    return (
      <Span>
        <Form onSubmit={handleSubmit}>
          <h3>Update Profile</h3>
          <Input type='text' name='name' placeholder='Edit Username'></Input>
          <Input
            type='password'
            name='password'
            placeholder='Change Password'
          />
          <Input type='text' name='location' placeholder='Update Location' />
          <span>
            <Button size='medium' type='submit'>
              Submit
            </Button>
          </span>
        </Form>
        <Form onSubmit={newSpecial}>
          <h3>Add New Special</h3>
          <Input
            type='text'
            name='name'
            // value={options.title}
            placeholder='Title of Special'
          ></Input>
          <Input
            // value={options.description}
            type='text'
            name='description'
            placeholder='Add Description'
          />
          <React.Fragment>
            <label>Start Date:</label>
            <Input
              type='date'
              // value={options.startDate}
              name='start'
            />
          </React.Fragment>
          <React.Fragment>
            <label>End Date:</label>
            <Input
              type='date'
              // value={options.endDate}
              name='end'
            />
          </React.Fragment>
          <React.Fragment>
            <label>Upload an Image:</label>
            <Input
              type='file'
              name='picture'
              //   value={options.image}
              placeholder='Add Image'
            />
          </React.Fragment>
          <span>
            <Button size='medium' type='submit'>
              Publish
            </Button>
          </span>
          <React.Fragment>
            <label>Preview:</label>
            <Card fields={options}></Card>
          </React.Fragment>
        </Form>
      </Span>
    );
  };
  return (
    <div>
      {name}
      <span>
        <UpdateForm></UpdateForm>
      </span>
      <span></span>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
