import React from 'react'
import PropTypes from 'prop-types'

class Login extends React.Component {
  render () {
    return (
      <div className="wrapper">
      <header className="main-header">
        {/* Logo */}
        <a href="../../index2.html" className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini">
            <b>A</b>LT</span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg">
            <b>Admin</b>LTE</span>
        </a>
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button */}
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">
              Toggle navigation
            </span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </a>

        </nav>
      </header>
      {/* =============================================== */}
      {/* Left side column. contains the sidebar */}
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
            </div>
            <div className="pull-left info">
              <p>
                Alexander Pierce
              </p>
              <a href="#">
                <i className="fa fa-circle text-success"/>
                Online
              </a>
            </div>
          </div>
          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">
              MAIN NAVIGATION
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-dashboard"/>
                <span>Dashboard</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"/>
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="../../index.html">
                    <i className="fa fa-circle-o"/>
                    Dashboard v1
                  </a>
                </li>
                <li>
                  <a href="../../index2.html">
                    <i className="fa fa-circle-o"/>
                    Dashboard v2
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-files-o"/>
                <span>
                  Layout Options
                </span>
                <span className="pull-right-container">
                  <span className="label label-primary pull-right">4</span>
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="../layout/top-nav.html">
                    <i className="fa fa-circle-o"/>
                    Top Navigation
                  </a>
                </li>
                <li>
                  <a href="../layout/boxed.html">
                    <i className="fa fa-circle-o"/>
                    Boxed
                  </a>
                </li>
                <li>
                  <a href="../layout/fixed.html">
                    <i className="fa fa-circle-o"/>
                    Fixed
                  </a>
                </li>
                <li>
                  <a href="../layout/collapsed-sidebar.html">
                    <i className="fa fa-circle-o"/>
                    Collapsed Sidebar
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="../widgets.html">
                <i className="fa fa-th"/>
                <span>Widgets</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-green">Hot</small>
                </span>
              </a>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-pie-chart"/>
                <span>Charts</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"/>
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="../charts/chartjs.html">
                    <i className="fa fa-circle-o"/>
                    ChartJS
                  </a>
                </li>
                <li>
                  <a href="../charts/morris.html">
                    <i className="fa fa-circle-o"/>
                    Morris
                  </a>
                </li>
                <li>
                  <a href="../charts/flot.html">
                    <i className="fa fa-circle-o"/>
                    Flot
                  </a>
                </li>
                <li>
                  <a href="../charts/inline.html">
                    <i className="fa fa-circle-o"/>
                    Inline charts
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-laptop"/>
                <span>
                  UI Elements
                </span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"/>
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="../UI/general.html">
                    <i className="fa fa-circle-o"/>
                    General
                  </a>
                </li>
                <li>
                  <a href="../UI/icons.html">
                    <i className="fa fa-circle-o"/>
                    Icons
                  </a>
                </li>
                <li>
                  <a href="../UI/buttons.html">
                    <i className="fa fa-circle-o"/>
                    Buttons
                  </a>
                </li>
                <li>
                  <a href="../UI/sliders.html">
                    <i className="fa fa-circle-o"/>
                    Sliders
                  </a>
                </li>
                <li>
                  <a href="../UI/timeline.html">
                    <i className="fa fa-circle-o"/>
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="../UI/modals.html">
                    <i className="fa fa-circle-o"/>
                    Modals
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-edit"/>
                <span>Forms</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"/>
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="../forms/general.html">
                    <i className="fa fa-circle-o"/>
                    General Elements
                  </a>
                </li>
                <li>
                  <a href="../forms/advanced.html">
                    <i className="fa fa-circle-o"/>
                    Advanced Elements
                  </a>
                </li>
                <li>
                  <a href="../forms/editors.html">
                    <i className="fa fa-circle-o"/>
                    Editors
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-table"/>
                <span>Tables</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"/>
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="../tables/simple.html">
                    <i className="fa fa-circle-o"/>
                    Simple tables
                  </a>
                </li>
                <li>
                  <a href="../tables/data.html">
                    <i className="fa fa-circle-o"/>
                    Data tables
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="../calendar.html">
                <i className="fa fa-calendar"/>
                <span>Calendar</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-red">3</small>
                  <small className="label pull-right bg-blue">17</small>
                </span>
              </a>
            </li>
            <li>
              <a href="../mailbox/mailbox.html">
                <i className="fa fa-envelope"/>
                <span>Mailbox</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-yellow">12</small>
                  <small className="label pull-right bg-green">16</small>
                  <small className="label pull-right bg-red">5</small>
                </span>
              </a>
            </li>
            <li className="treeview active">
              <a href="#">
                <i className="fa fa-folder"/>
                <span>Examples</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"/>
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="invoice.html">
                    <i className="fa fa-circle-o"/>
                    Invoice
                  </a>
                </li>
                <li>
                  <a href="profile.html">
                    <i className="fa fa-circle-o"/>
                    Profile
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <i className="fa fa-circle-o"/>
                    Login
                  </a>
                </li>
                <li>
                  <a href="register.html">
                    <i className="fa fa-circle-o"/>
                    Register
                  </a>
                </li>
                <li>
                  <a href="lockscreen.html">
                    <i className="fa fa-circle-o"/>
                    Lockscreen
                  </a>
                </li>
                <li>
                  <a href="404.html">
                    <i className="fa fa-circle-o"/>
                    404 Error
                  </a>
                </li>
                <li>
                  <a href="500.html">
                    <i className="fa fa-circle-o"/>
                    500 Error
                  </a>
                </li>
                <li className="active">
                  <a href="blank.html">
                    <i className="fa fa-circle-o"/>
                    Blank Page
                  </a>
                </li>
                <li>
                  <a href="pace.html">
                    <i className="fa fa-circle-o"/>
                    Pace Page
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-share"/>
                <span>Multilevel</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"/>
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o"/>
                    Level One
                  </a>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-circle-o"/>
                    Level One
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"/>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-circle-o"/>
                        Level Two
                      </a>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="fa fa-circle-o"/>
                        Level Two
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right"/>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="#">
                            <i className="fa fa-circle-o"/>
                            Level Three
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-circle-o"/>
                            Level Three
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o"/>
                    Level One
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://adminlte.io/docs">
                <i className="fa fa-book"/>
                <span>Documentation</span>
              </a>
            </li>
            <li className="header">LABELS</li>
            <li>
              <a href="#">
                <i className="fa fa-circle-o text-red"/>
                <span>Important</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-circle-o text-yellow"/>
                <span>Warning</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-circle-o text-aqua"/>
                <span>Information</span>
              </a>
            </li>
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
      {/* =============================================== */}
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Blank page
            <small>
              it all starts here
            </small>
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <i className="fa fa-dashboard"/>
                Home
              </a>
            </li>
            <li>
              <a href="#">Examples</a>
            </li>
            <li className="active">
              Blank page
            </li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Title</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i className="fa fa-minus"/>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                  <i className="fa fa-times"/>
                </button>
              </div>
            </div>
            <div className="box-body">
              Start creating your amazing application!
            </div>
            {/* /.box-body */}
            <div className="box-footer">
              Footer
            </div>
            {/* /.box-footer */}
          </div>
          {/* /.box */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b>
          2.4.0
        </div>
        <strong>Copyright © 2014-2016
          <a href="https://adminlte.io">Almsaeed Studio</a>.</strong>
        All rights reserved.
      </footer>
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Create the tabs */}
        <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
          <li>
            <a href="#control-sidebar-home-tab" data-toggle="tab">
              <i className="fa fa-home"/>
            </a>
          </li>
          <li>
            <a href="#control-sidebar-settings-tab" data-toggle="tab">
              <i className="fa fa-gears"/>
            </a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          {/* Home tab content */}
          <div className="tab-pane" id="control-sidebar-home-tab">
            <h3 className="control-sidebar-heading">
              Recent Activity
            </h3>
            <ul className="control-sidebar-menu">
              <li>
                <a href="javascript:void(0)">
                  <i className="menu-icon fa fa-birthday-cake bg-red"/>
                  <div className="menu-info">
                    <h4 className="control-sidebar-subheading">
                      Langdon's Birthday
                    </h4>
                    <p>
                      Will be 23 on April 24th
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="menu-icon fa fa-user bg-yellow"/>
                  <div className="menu-info">
                    <h4 className="control-sidebar-subheading">
                      Frodo Updated His Profile
                    </h4>
                    <p>
                      New phone +1(800)555-1234
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="menu-icon fa fa-envelope-o bg-light-blue"/>
                  <div className="menu-info">
                    <h4 className="control-sidebar-subheading">
                      Nora Joined Mailing List
                    </h4>
                    <p>nora@example.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="menu-icon fa fa-file-code-o bg-green"/>
                  <div className="menu-info">
                    <h4 className="control-sidebar-subheading">
                      Cron Job 254 Executed
                    </h4>
                    <p>
                      Execution time 5 seconds
                    </p>
                  </div>
                </a>
              </li>
            </ul>
            {/* /.control-sidebar-menu */}
            <h3 className="control-sidebar-heading">
              Tasks Progress
            </h3>
            <ul className="control-sidebar-menu">
              <li>
                <a href="javascript:void(0)">
                  <h4 className="control-sidebar-subheading">
                    Custom Template Design
                    <span className="label label-danger pull-right">70%</span>
                  </h4>
                  <div className="progress progress-xxs">
                    <div className="progress-bar progress-bar-danger" style={{
                        width: '70%'
                      }}/>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <h4 className="control-sidebar-subheading">
                    Update Resume
                    <span className="label label-success pull-right">95%</span>
                  </h4>
                  <div className="progress progress-xxs">
                    <div className="progress-bar progress-bar-success" style={{
                        width: '95%'
                      }}/>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <h4 className="control-sidebar-subheading">
                    Laravel Integration
                    <span className="label label-warning pull-right">50%</span>
                  </h4>
                  <div className="progress progress-xxs">
                    <div className="progress-bar progress-bar-warning" style={{
                        width: '50%'
                      }}/>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <h4 className="control-sidebar-subheading">
                    Back End Framework
                    <span className="label label-primary pull-right">68%</span>
                  </h4>
                  <div className="progress progress-xxs">
                    <div className="progress-bar progress-bar-primary" style={{
                        width: '68%'
                      }}/>
                  </div>
                </a>
              </li>
            </ul>
            {/* /.control-sidebar-menu */}
          </div>
          {/* /.tab-pane */}
          {/* Stats tab content */}
          <div className="tab-pane" id="control-sidebar-stats-tab">
            Stats Tab Content
          </div>
          {/* /.tab-pane */}
          {/* Settings tab content */}
          <div className="tab-pane" id="control-sidebar-settings-tab">
            <form method="post">
              <h3 className="control-sidebar-heading">
                General Settings
              </h3>
              <div className="form-group">
                <label className="control-sidebar-subheading">
                  Report panel usage
                  <input type="checkbox" className="pull-right" defaultChecked="defaultChecked"/>
                </label>
                <p>
                  Some information about this general settings option
                </p>
              </div>
              {/* /.form-group */}
              <div className="form-group">
                <label className="control-sidebar-subheading">
                  Allow mail redirect
                  <input type="checkbox" className="pull-right" defaultChecked="defaultChecked"/>
                </label>
                <p>
                  Other sets of options are available
                </p>
              </div>
              {/* /.form-group */}
              <div className="form-group">
                <label className="control-sidebar-subheading">
                  Expose author name in posts
                  <input type="checkbox" className="pull-right" defaultChecked="defaultChecked"/>
                </label>
                <p>
                  Allow the user to show his name in blog posts
                </p>
              </div>
              {/* /.form-group */}
              <h3 className="control-sidebar-heading">
                Chat Settings
              </h3>
              <div className="form-group">
                <label className="control-sidebar-subheading">
                  Show me as online
                  <input type="checkbox" className="pull-right" defaultChecked="defaultChecked"/>
                </label>
              </div>
              {/* /.form-group */}
              <div className="form-group">
                <label className="control-sidebar-subheading">
                  Turn off notifications
                  <input type="checkbox" className="pull-right"/>
                </label>
              </div>
              {/* /.form-group */}
              <div className="form-group">
                <label className="control-sidebar-subheading">
                  Delete chat history
                  <a href="javascript:void(0)" className="text-red pull-right">
                    <i className="fa fa-trash-o"/>
                  </a>
                </label>
              </div>
              {/* /.form-group */}
            </form>
          </div>
          {/* /.tab-pane */}
        </div>
      </aside>
      {/* /.control-sidebar */}
      {/* Add the sidebar's background. This div must be placed
             immediately after the control sidebar */
      }
      <div className="control-sidebar-bg"/>
    </div>
    )
  }
}

export default Login;
