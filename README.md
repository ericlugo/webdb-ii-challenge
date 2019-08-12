# Web DB II Module Challenge

In this challenge, you will write an API that can be used to manage _Cars_ stored in a Relational Database.

## Project Set Up

Follow these steps for starting your project.

- [x] Fork this repository and **clone your fork**.
- [x] Add your project manager as collaborator on your fork.
- [x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [x] Submit a Pull-Request to merge `<firstName-lastName>` Branch into master (student's Repository). **Please don't merge your own pull request**
- [x] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- [x] Using `knex migrations`, design and write a schema for the `cars` table using the specifications below.
- [x] Configure `knex` to connect to a `/data/car-dealer.db3` database using the `sqlite3` npm module.
- [x] Write a set of endpoints to support `CREATE` and `READ` operations on the `cars` resource.
- [x] Use a rest client like _Insomnia_ or _Postman_ to test your API.

## Specifications

The client for this API is a car dealer who has provided the following specs:

- The critical information for each car is:
  - [x] VIN
  - [x] make
  - [x] model
  - [x] mileage
- They also track the following but this information is not always immediately known:
  - [x] transmission type
  - [x] status of the title (clean, salvage, etc.)

## Stretch Problems

- [x] Add seed data to the database using `knex seeds`
- [x] Add `UPDATE` and `DELETE` operations to your API.
- [ ] Write a schema file for a `sales` table. This table should track information on the sale of each car. You may wish to research `foreign keys` in order to link each sale to the entry in `cars` which sold.

---

### This fork is maintained by: Eric SarragaLugo
