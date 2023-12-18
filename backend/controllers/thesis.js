const mongoose = require("mongoose");
const Thesis = require('../models/thesis');
const FileThesis = require('../models/file_thesis');
const AssignedThesis = require('../models/assigned_thesis');
const CompletedThesis = require("../models/completed_thesis");
const User = require("../models/user");



exports.thesis_get_all = (req, res, next) => {
    // Lấy tham số truy vấn
    var perPage = 5
    var page = req.query.page || 1
    var query = { pending: false }

    // Lọc theo đại học nếu được chỉ định
    if (req.query.university != null && req.query.university != 'undefined') {
      query['university'] = req.query.university
    }

    // Lọc theo giáo sư hướng dẫn nếu được chỉ định
    if (req.query.professor != null && req.query.professor != 'undefined') {
      query['professor'] = req.query.professor
    }

    // Biến để lưu tổng số luận văn
    var count;

    // Hiển thị câu truy vấn trong console (để debug)
    console.log(query)

    // Đếm số lượng luận văn thỏa mãn điều kiện tìm kiếm
    Thesis.countDocuments(query)
      .then(result => {
        count = result

        // Lấy danh sách luận văn, populate thông tin về giáo sư hướng dẫn và đại học
        Thesis.find(query)
          .populate('professor')
          .populate('university')
          .skip((perPage * page) - perPage)
          .limit(perPage)
          .exec()
          .then(docs => {
            // Tạo đối tượng JSON response
            const response = {
              docs: docs,
              count: count,
              pages: Math.ceil(count / perPage),
            }

            // Trả về phản hồi JSON với mã trạng thái 200 và đối tượng response
            res.status(200).json(response);
          })
      })
      .catch(err => {
        // Xử lý lỗi: in thông báo lỗi vào console và trả về phản hồi JSON với mã trạng thái 500 và thông báo lỗi
        console.log(err + "wjat");
        res.status(500).json({
          error: err
        });
      })
}

exports.get_byId = (req, res, next) => {
    // Tìm luận văn theo ID
    Thesis.findById({ _id: req.params.thesisId })
      .populate('professor') // Populate thông tin về giáo sư hướng dẫn
      .populate('university') // Populate thông tin về đại học
      .populate({ path: 'creator_student', select: 'name lastname email' }) // Populate thông tin về sinh viên tạo ra luận văn (nếu là sinh viên)
      .populate({ path: 'creator_external', select: 'name lastname email' }) // Populate thông tin về tác giả ngoại trời tạo ra luận văn (nếu là tác giả ngoại trời)
      .exec()
      .then(doc => {
        // Kiểm tra xem luận văn có tồn tại hay không
        if (doc != null)
          // Nếu tồn tại, trả về phản hồi JSON với mã trạng thái 200 và thông tin luận văn
          res.status(200).json(doc);
        else
          // Nếu không tồn tại, trả về phản hồi JSON với mã trạng thái 404 và thông báo lỗi
          res.status(404).json({ message: 'Thesis not found' })
      })
      .catch(err => {
        // Xử lý lỗi: in thông báo lỗi vào console và trả về phản hồi JSON với mã trạng thái 500 và thông báo lỗi
        console.log(err + "wjat");
        res.status(500).json({
          error: err
        });
      })
  }

  exports.get_files = (req, res, next) => {
    // Tìm các tệp tin liên quan đến một luận văn dựa trên thesisId
    FileThesis.find({ thesis: req.params.thesisId })
      .exec()
      .then(result => {
        // Kiểm tra xem có kết quả nào trả về không
        if (result != null) {
          // In kết quả ra console để kiểm tra (để debug)
          console.log(result);
          
          // Trả về phản hồi JSON với mã trạng thái 200 và danh sách các tệp tin
          res.status(200).json(result);
        }
        else {
          // Nếu không có kết quả, trả về phản hồi JSON với mã trạng thái 200 và thông báo "Not found"
          res.status(200).json({
            message: "Not found"
          });
        }
      })
      .catch(err => {
        // Xử lý lỗi: in thông báo lỗi vào console và trả về phản hồi JSON với mã trạng thái 500 và thông báo lỗi
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }
  
  exports.get_file_byId = (req, res, next) => {
    FileThesis.findById({ _id: req.params.fileId })
      .exec()
      .then(result => {
        if (result != null) {
          console.log(result)
          res.status(200).json(result)
        }
        else {
          res.status(200).json({
            message: "Not found"
          })
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }

  exports.thesis_completed_get_all = (req, res, next) => {
    // Số lượng mục hiển thị trên mỗi trang
    var perPage = 5
    // Trang hiện tại, có thể được chỉ định qua tham số truy vấn
    var page = req.query.page || 1
    var count;
    // Câu truy vấn để lấy các luận văn đã hoàn thành
    var query = { completed: true }
  
    // Đếm số lượng luận văn đã hoàn thành
    AssignedThesis.countDocuments(query)
      .then(result => {
        count = result
  
        // Lấy danh sách các luận văn đã hoàn thành, populate thông tin về luận văn, giáo sư hướng dẫn và sinh viên
        AssignedThesis.find(query)
          .populate('thesis')
          .populate({ path: 'professor', select: 'name lastname email ' })
          .populate({ path: 'student', select: 'name lastname email ' })
          .skip((perPage * page) - perPage)
          .limit(perPage)
          .exec()
          .then(docs => {
            // Tạo đối tượng JSON response
            const response = {
              docs: docs,
              count: count,
              pages: Math.ceil(count / perPage),
            }
            // Trả về phản hồi JSON với mã trạng thái 200 và đối tượng response
            res.status(200).json(response);
          })
          .catch(err => {
            // Xử lý lỗi trong quá trình lấy danh sách luận văn đã hoàn thành
            console.log(err + "wjat");
            res.status(500).json({
              error: err
            });
          });
      })
      .catch(err => {
        // Xử lý lỗi trong quá trình đếm số lượng luận văn đã hoàn thành
        console.log(err + "wjat");
        res.status(500).json({
          error: err
        });
      });
  }

  exports.thesis_completed_file = (req, res, next) => {
    CompletedThesis.find({ thesis: req.params.assigned_thesisId })
      .select('_id file_name created_time thesis')
      .exec()
      .then(result => {
        if (result.length > 0) {
          res.status(200).json(result)
        }
        else {
          res.status(404).json({
            message: "Not found"
          })
        }
      })
      .catch(err => {
        res.status(500).json({ error: err })
      })
  }
  
  exports.thesis_completed_data_file = (req, res, next) => {
    CompletedThesis.find({ _id: req.params.fileId })
      .select('_id file_data')
      .exec()
      .then(result => {
        if (result.length > 0) {
          res.status(200).json(result)
        }
        else {
          res.status(404).json({
            message: "Not found"
          })
        }
      })
      .catch(err => {
        res.status(500).json({ error: err })
      })
  }
  
  exports.getProfessors = (req, res, next) => {
    var query = { role: 'Professor' }
    User.find(query)
      .select("email name lastname")
      .exec()
      .then(docs => {
        if (docs != null) {
          res.status(200).json(docs);
        }
        else {
          res.status(404).json({ message: "Not found" })
        }
      })
      .catch(err => {
        console.log(err + "wjat");
        res.status(500).json({
          error: err
        });
      });
  };
