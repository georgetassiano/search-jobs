/**
 * @module services/jobs
 */

import jobs from './data'

interface Job {
  id: number
  title: string
  description: string
  state: string
  salary: number
}

/**
 * Get all jobs
 *
 * @returns {Promise} A promise that resolves to an array of jobs
 */
function getJobs(): Promise<Job[]> {
  return new Promise((resolve) => {
    setTimeout((): void => {
      resolve(jobs)
    }, 1000)
  })
}

/**
 * Get a job by id
 *
 * @param {number} id - The id of the job to get
 * @returns {Promise} A promise that resolves to a job object or rejects with an error
 */
function getJob(id: number): Promise<Job> {
  return new Promise((resolve, reject) => {
    setTimeout((): void => {
      const job = findJob(id)
      if (job !== undefined) {
        resolve(job)
      } else {
        reject(new Error('Job not found'))
      }
    }, 1000)
  })
}

/**
 * Get a job by id
 *
 * @param {number} id
 * @returns {Job | undefined} A job object or undefined if not found
 */
function findJob(id: number): Job | undefined {
  return jobs.find((job: Job): boolean => job.id === id)
}

export { getJobs, getJob, Job }
