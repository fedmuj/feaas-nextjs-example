import * as FEAAS from '@sitecore-feaas/clientside/react'

export default function HelloWorldComponent(props: {
  firstName: string
  lastName: string
  telephone: string
  bold: boolean
}) {
  return (
    <>
      <h2>Hybrid</h2>
      <dl style={props.bold ? { fontWeight: 'bold' } : {}}>
        <dt>Description</dt>
        <dd>Interactive UI with SEO-friendly fallback</dd>
        <dt>Rendered on</dt>
        <dd>{typeof window != 'undefined' ? 'Clientside' : 'Server'}</dd>
        <dt>Data</dt>
        <dd>
          {props.firstName} {props.lastName} / {props.telephone}
        </dd>
      </dl>
    </>
  )
}

FEAAS.registerComponent(HelloWorldComponent, {
  name: 'hybrid',
  title: 'Hybrid server/client',
  description: 'Description of my example component',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58',
  group: 'Examples',
  required: ['firstName'],
  properties: {
    firstName: {
      type: 'string',
      title: 'First name'
    },
    lastName: {
      type: 'string',
      title: 'Last name'
    },
    telephone: {
      type: 'number',
      title: 'Telephone',
      minLength: 10
    },
    bold: {
      type: 'boolean',
      title: 'Show text in bold weight'
    }
  },
  ui: {
    firstName: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:placeholder': 'Write your first name'
    },
    bold: {
      'ui:widget': 'radio'
    }
  }
})