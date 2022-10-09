interface tabProps {
  lbl: string;
  to: string;
  classExt?: string;
}
export default function Tab(props: Partial<tabProps>) {
  const { lbl = 'tab', to = '/#', classExt = '' } = props;
  return (
    <li className="nav-item">
      <a className={`nav-link ${classExt}`} data-bs-toggle="tab" href={to}>
        {lbl}
      </a>
    </li>
  );
}
