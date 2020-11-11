/** @jsxImportSource @emotion/core */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import { Fragment } from 'react'
import React from 'react'

function Footer() {
  return (
    <Fragment>
      <footer
        css={css`
          padding: 10px 0px;
          text-align: center;
          display: grid;
          grid-template-columns: 30% 70%;
          background-color: rgb(247, 247, 247);
        `}
      >
        <div className='comp_logo'>
          <h3>Rustique</h3>
        </div>

        <div
          className='footer_links'
          css={css`
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          `}
        >
          <div
            className='footer_link'
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <h3
              css={css`
                margin-bottom: 1rem;
              `}
            >
              Quick links
            </h3>
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              css={css`
                text-decoration: none;
                color: rgb(119, 112, 112);
              `}
            >
              Wishlist
            </a>
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              css={css`
                text-decoration: none;
                color: rgb(119, 112, 112);
              `}
            >
              Customer service
            </a>
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              css={css`
                text-decoration: none;
                color: rgb(119, 112, 112);
              `}
            >
              Order tracking
            </a>
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              css={css`
                text-decoration: none;
                color: rgb(119, 112, 112);
              `}
            >
              More
            </a>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <h3
              css={css`
                margin-bottom: 1rem;
              `}
            >
              New Products
            </h3>
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              css={css`
                text-decoration: none;
                color: rgb(119, 112, 112);
              `}
            >
              Women Cloth
            </a>
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              css={css`
                text-decoration: none;
                color: rgb(119, 112, 112);
              `}
            >
              Fashion Accessories
            </a>
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              css={css`
                text-decoration: none;
                color: rgb(119, 112, 112);
              `}
            >
              Men Cloth
            </a>
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              css={css`
                text-decoration: none;
                color: rgb(119, 112, 112);
              `}
            >
              Kids toys
            </a>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <h3
              css={css`
                margin-bottom: 1rem;
              `}
            >
              Support
            </h3>
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              css={css`
                text-decoration: none;
                color: rgb(119, 112, 112);
              `}
            >
              Frequently asked questions
            </a>

            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              css={css`
                text-decoration: none;
                color: rgb(119, 112, 112);
              `}
            >
              Terms and conditions
            </a>

            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              css={css`
                text-decoration: none;
                color: rgb(119, 112, 112);
              `}
            >
              Privacy and Policy
            </a>
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              css={css`
                text-decoration: none;
                color: rgb(119, 112, 112);
              `}
            >
              payment issue
            </a>
          </div>
        </div>
      </footer>
      <div
        css={css`
          padding: 1rem 0;
          display: flex;
          justify-content: space-around;
        `}
      >
        <p>
          CopyRight&copy;2020 All rights reserved | Rustique Enginneering team
        </p>
        <p>
          <i
            className='fab fa-twitter'
            css={css`
              margin-right: 1rem;
              font-size: 1.5rem;
            `}
          />
          <i
            className='fab fa-facebook'
            css={css`
              margin-right: 1rem;
              font-size: 1.5rem;
            `}
          />
          <i
            className='fab fa-instagram'
            css={css`
              margin-right: 1rem;
              font-size: 1.5rem;
            `}
          />
        </p>
      </div>
    </Fragment>
  )
}

export default Footer
