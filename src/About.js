import { toWords } from 'number-to-words';
import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function About() {
  const age = toWords(new Date().getFullYear() - 1994);
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <Typography gutterBottom>
        Hello! My name is Jake Mingolla and I like to code. I am a {age} year
        old software developer currently located in Boston, Massachusetts.
      </Typography>
      <Typography>
        I created this site to showcase my current and past development projects
        as well as some of my pottery created at{' '}
        <Link
          color='secondary'
          href='http://mudflat.org'
          onClick={preventDefault}
        >
          Mudflat
        </Link>
        , an amazing studio located in Somerville, Massachusetts.
      </Typography>
    </>
  );
}
