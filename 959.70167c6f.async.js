"use strict";(self.webpackChunkdesign=self.webpackChunkdesign||[]).push([[959],{23959:function(bn,p,r){r.r(p),r.d(p,{Box:function(){return H},Button:function(){return nn},ConfigProvider:function(){return w}});var z=r(97893),E=r.n(z),l=r(53720),N=r(83930),T=r(85863),O={fontSize:"14px",colorDefault:"#ffffff",colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorDisabled:"#f5f5f5",colorText:"rgba(0, 0, 0, 0.88)",colorDisabledText:"rgba(0, 0, 0, 0.25)",colorBorder:"#d9d9d9",borderRadius:"6px"},h={prefixClass:"ant",token:O},k=(0,l.createContext)(h),B=r(27718),S=(0,l.createContext)({theme:h}),W=function(n){var t=n.children,a=n.theme,c=(0,l.useContext)(S),s=(0,N.Z)((0,T.Z)(c.theme||h),(0,T.Z)(a));return(0,B.jsx)(S.Provider,{value:E()({},c),children:a?(0,B.jsx)(k.Provider,{value:s,children:t}):t})},w=W,X=r(84377),x=r.n(X),y=r(58947),f=r(85827),D,F=function(n){var t=n.children;return(0,f.BX)("div",{css:(0,y.iv)(D||(D=x()([`
        display: flex;
        gap: 20px;
        margin: 20px 0;
        flex-wrap: wrap;
      `]))),children:[" ",t]})},G=F,H=G,J=r(8333),K=r.n(J),M=r(18172),Q=r.n(M),j=r(90604),U=function(n,t){var a=new j.C(n);return a.darken(t).toString()},P=function(n,t){var a=new j.C(n);return a.lighten(t).toString()},R,Y;function V(o,n){var t=o.colorDefault,a=o.colorPrimary,c=o.colorSuccess,s=o.colorWarning,g=o.colorError,C=o.colorInfo,d=o.borderRadius,b=o.colorBorder,v=o.colorDisabled,m=o.colorText,u=o.colorDisabledText;return(0,y.iv)(R||(R=x()([`
    appearance: none;
    border: none;
    background-color: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    cursor: pointer;
    overflow: visible;
    margin: 0;
    padding: 0;
    line-height: normal;

    &:focus {
      outline: none;
    }

    &:active {
      box-shadow: none;
    }

    &.`,`-btn {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      position: relative;
      text-align: center;
      align-self: flex-start;
      padding: 5px 15px;
      border-width: 1px;
      border-color: transparent;
      border-style: solid;
      border-radius: `,`;
      color: `,`;
      span {
        display: inline-block;
      }
    }

    &.`,`-btn-animation {
      &::after {
        pointer-events: none;
        z-index: 1;
        content: '';
        display: block;
        position: absolute;
        width: calc(100% + 8px);
        height: calc(100% + 8px);
        opacity: 0;
        background: `,`;
        border-radius: `,`;
        animation: ripple 0.6s ease-out;
        @keyframes ripple {
          0% {
            opacity: 0.6;
            width: calc(100% + 8px);
            height: calc(100% + 8px);
          }
          20% {
            transform: translateY(-2px) rotate(-1deg);
          }
          40% {
            transform: translateY(2px) rotate(1deg);
          }
          60% {
            transform: translateY(-2px) rotate(-1deg);
          }
          80% {
            transform: translateY(2px) rotate(1deg);
          }
          90% {
            transform: translateY(0) rotate(0);
          }
          100% {
            transform: translateY(0) rotate(0);
            opacity: 0;
          }
        }
      }
    }

    &.`,`-btn-default {
      background-color: `,`;
      border-color: `,`;
      color: `,`;

      &:hover:not(:disabled, .`,`-btn-link) {
        color: `,`;
        border-color: `,`;
      }
    }

    &.`,`-btn-link {
      background-color: `,` !important;
      color: `,`;
      border: none;

      &.`,`-btn-loading {
        span:first-of-type {
          display: none;
        }
      }
    }

    &.`,`-btn-dashed {
      border-style: dashed !important;
      background-color: `,`!important;
      border-color: `,`;
      color: `,`;
    }

    &.`,`-btn-primary {
      `,`
    }

    &.`,`-btn-success {
      `,`
    }

    &.`,`-btn-warning {
      `,`
    }

    &.`,`-btn-error {
      `,`
    }

    &.`,`-btn-info {
      `,`
    }

    &.`,`-btn-block {
      display: flex;
      text-align: center;
      width: 100%;
    }

    &:disabled {
      border-color: `,`;
      background-color: `,`;
      color: `,`;
      cursor: not-allowed;
    }

    &.`,`-btn-loading {
      span:first-of-type {
        margin-right: 5px;
        width: 14.5px;
        height: 14.5px;
        border-radius: 50%;
        border: 2px solid `,`;
        border-bottom-color: transparent;
        animation: rotate 1s linear infinite;
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      }
    }
    &.`,`-btn-round {
      border-radius: 20px;
      &::after {
        border-radius: 20px;
      }
    }
  `])),n,d,t,n,a,d,n,t,b,m,n,a,a,n,t,a,n,n,t,b,m,n,i(a,t,n),n,i(c,t,n),n,i(s,t,n),n,i(g,t,n),n,i(C,t,n),n,b,v,u,n,a,n)}function i(o,n,t){return(0,y.iv)(Y||(Y=x()([`
    background-color: `,`;
    border-color: `,`;

    &.`,`-btn-link {
      color: `,`;
    }

    &.`,`-btn-loading {
      span:first-of-type {
        border: 2px solid `,`;
        border-bottom-color: `,`;
      }
    }

    &.`,`-btn-dashed {
      color: `,`;
      &.`,`-btn-loading {
        span:first-of-type {
          border: 2px solid `,`;
          border-bottom-color: `,`;
        }
      }
    }

    &.`,`-btn-animation {
      &::after {
        background-color: `,`;
      }
    }

    &:hover {
      background-color: `,`;
    }

    &:active {
      background-color: `,`;
    }

    &:disabled {
      border-color: `,`;
      background-color: `,`;
      color: `,`;
    }
  `])),o,o,t,o,t,n,o,t,o,t,o,n,t,o,P(o,8),U(o,8),o,P(o,8),n)}var $=function(n,t){var a=n.children,c=n.className,s=n.type,g=n.disabled,C=n.block,d=n.loading,b=n.dashed,v=n.link,m=n.round,u=n.onClick,A=(0,l.useContext)(k),on=A.token,e=A.prefixClass,tn=(0,l.useState)(!1),I=K()(tn,2),Z=I[0],L=I[1],rn=Q()("".concat(e,"-btn"),"".concat(e,"-btn-").concat(s||"default"),"".concat(C?"".concat(e,"-btn-block"):""),"".concat(b?"".concat(e,"-btn-dashed"):""),"".concat(v?"".concat(e,"-btn-link"):""),"".concat(d?"".concat(e,"-btn-loading"):""),"".concat(Z&&!v?"".concat(e,"-btn-animation"):""),"".concat(m?"".concat(e,"-btn-round"):""),c),an=V(on,e),en=function(){Z||(L(!0),setTimeout(function(){L(!1)},600))},ln=function(sn){g||d||(en(),u==null||u(sn))},cn=t||l.createRef();return(0,f.BX)("button",{className:rn,css:an,ref:cn,onClick:ln,disabled:g||!1,children:[d?(0,f.tZ)("span",{}):null,(0,f.tZ)("span",{children:a})]})},q=(0,l.forwardRef)($),_=q,nn=_}}]);
