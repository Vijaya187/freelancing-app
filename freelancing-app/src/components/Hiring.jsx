import React from "react";
import "./styles/hiring.css";

const Hiring = () => {
  return (
    <>
      <div className="container m-5">
        <div className="row">
          <div className="col-md-12">
            <form action="" className="needs-validation" noValidate>
              {/* Title */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control form-control-lg"
                  required
                />
              </div>

              {/* Description */}
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  placeholder="Description here....."
                  required
                ></textarea>
              </div>

              {/* Requirement */}
              <div className="mb-3">
                <label htmlFor="requirement" className="form-label">
                  Requirement
                </label>
                <textarea
                  className="form-control"
                  id="requirement"
                  rows="3"
                  placeholder="Requirement here....."
                  required
                ></textarea>
              </div>

              {/* Job Category */}
              <div className="mb-3">
                <label htmlFor="jobCategory" className="form-label">
                  Job Category
                </label>
                <select className="form-select" id="jobCategory" required>
                  <option value="">Select a category</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="internship">Internship</option>
                  <option value="contract">Contract</option>
                </select>
              </div>

              {/* Salary Range */}
              <div className="mb-3">
                <label htmlFor="salary" className="form-label">
                  Salary Range (in USD)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  min="1000"
                  step="500"
                  placeholder="Enter salary"
                  required
                />
              </div>

              {/* Job Location */}
              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Job Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Enter job location"
                  required
                />
              </div>

              {/* Work Type */}
              <div className="mb-3">
                <label className="form-label">Work Type</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="workType"
                    id="remote"
                    value="remote"
                    required
                  />
                  <label className="form-check-label" htmlFor="remote">
                    Remote
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="workType"
                    id="onsite"
                    value="onsite"
                  />
                  <label className="form-check-label" htmlFor="onsite">
                    On-site
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="workType"
                    id="hybrid"
                    value="hybrid"
                  />
                  <label className="form-check-label" htmlFor="hybrid">
                    Hybrid
                  </label>
                </div>
              </div>

              {/* Company Name */}
              <div className="mb-3">
                <label htmlFor="companyName" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  placeholder="Enter company name"
                  required
                />
              </div>

              {/* Contact Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Contact Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter contact email"
                  required
                />
              </div>

              {/* Upload Job Description File */}
              <div className="mb-3">
                <label htmlFor="jobFile" className="form-label">
                  Upload Job Description
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="jobFile"
                  accept=".pdf,.doc,.docx"
                />
              </div>

              {/* Choose a Time */}
              <div className="mb-3">
                <label htmlFor="dateTime" className="form-label">
                  Choose a time:
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="dateTime"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="hiring-btn m-5 text-center">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hiring;
