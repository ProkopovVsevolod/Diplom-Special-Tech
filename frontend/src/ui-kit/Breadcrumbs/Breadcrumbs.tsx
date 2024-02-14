import { FC, ReactNode } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./breadcrumbs.scss";

interface BreadcrumbItem {
   title: string;
   url: string;
}

const Breadcrumbs: FC = () => {

   const location = useLocation();
   console.log(location)
   const pathnames = location.pathname.split('/').filter((x) => x);

   const breadcrumbs: BreadcrumbItem[] = pathnames.map((value, index) => {
   const last = index === pathnames.length - 1;
   const to = `/${pathnames.slice(0, index + 1).join('/')}`;

   return {
      title: last ? value : value.toUpperCase(),
      url: to,
   };
   });
  
    return (
      <nav>
         <ul className="breadcrumb">
            {breadcrumbs.map((breadcrumb, index) => {
               const { title, url } = breadcrumb;
               return (
                  <li key={title} className={`breadcrumb__item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}>
                  {index === breadcrumbs.length - 1 ? (
                     <span>{title}</span>
                  ) : (
                     <Link to={url}>{title}</Link>
                  )}
                  </li>
               );
            })}
         </ul>
    </nav>

    );
}

export default Breadcrumbs;