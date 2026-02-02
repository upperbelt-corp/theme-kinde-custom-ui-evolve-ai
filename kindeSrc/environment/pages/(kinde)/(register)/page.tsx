// "use server";
//
// import { Widget } from "../../../../components/widget";
// import { DefaultLayout } from "../../../../layouts/default";
// import { type KindePageEvent } from "@kinde/infrastructure";
// import React from "react";
// import { renderToString } from "react-dom/server";
// import { Root } from "../../../../root";
//
// const RegisterPage: React.FC<KindePageEvent> = ({ context, request }) => {
//   return (
//     <Root context={context} request={request}>
//       <DefaultLayout>
//         <Widget
//           heading={context.widget.content.heading}
//           description={context.widget.content.description}
//         />
//       </DefaultLayout>
//     </Root>
//   );
// };
//
// // Page Component
// export default async function Page(event: KindePageEvent): Promise<string> {
//   const page = await RegisterPage(event);
//   return renderToString(page);
// }

"use client"; // If using Next.js

import React from "react";
import { Widget } from "../../../../components/widget";
import { DefaultLayout } from "../../../../layouts/default";
import { type KindePageEvent } from "@kinde/infrastructure";
import { Root } from "../../../../root";

const RegisterPage: React.FC<KindePageEvent> = ({ context, request }) => {
    return (
        <Root context={context} request={request}>
            <DefaultLayout>
                <Widget
                    heading={context.widget.content.heading}
                    description={context.widget.content.description}
                />
            </DefaultLayout>
        </Root>
    );
};

export default RegisterPage;

